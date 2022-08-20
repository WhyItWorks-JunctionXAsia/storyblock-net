package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"storyblock/x/storyblock/types"
)

func (k Keeper) Books(c context.Context, req *types.QueryBooksRequest) (*types.QueryBooksResponse, error) {
	// Throw an error if request is nil
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	// Define a variable that will store a list of books
	var books []*types.Book

	// Get context with the information about the environment
	ctx := sdk.UnwrapSDKContext(c)

	// Get the key-value module store using the store key (in our case store key is "chain")
	store := ctx.KVStore(k.storeKey)

	// Get the part of the store that keeps books (using book key, which is "Book-value-")
	bookStore := prefix.NewStore(store, []byte(types.BookKey))

	// Paginate the books store based on PageRequest
	pageRes, err := query.Paginate(bookStore, req.Pagination, func(key []byte, value []byte) error {
		var book types.Book
		if err := k.cdc.Unmarshal(value, &book); err != nil {
			return err
		}

		books = append(books, &book)

		return nil
	})

	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	// Return a struct containing a list of books and pagination info
	return &types.QueryBooksResponse{Book: books, Pagination: pageRes}, nil
}
