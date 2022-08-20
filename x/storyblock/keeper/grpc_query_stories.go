package keeper

import (
	"context"
	"storyblock/x/storyblock/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Stories(goCtx context.Context, req *types.QueryStoriesRequest) (*types.QueryStoriesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var stories []*types.Story
	ctx := sdk.UnwrapSDKContext(goCtx)
	store := ctx.KVStore(k.storeKey)
	storyStore := prefix.NewStore(store, []byte(types.StoryKey))
	bookStore := prefix.NewStore(store, []byte(types.BookKey))

	var bookdat types.Book
	temp := bookStore.Get([]byte(req.BookId))
	if temp == nil {
		return nil, status.Error(codes.Internal, "No Book")
	}
	k.cdc.Unmarshal(temp, &bookdat)

	pageRes, err := query.Paginate(storyStore, req.Pagination, func(key []byte, value []byte) error {
		var story types.Story
		if err := k.cdc.Unmarshal(value, &story); err != nil {
			return err
		}
		if story.BookId == req.BookId {
			stories = append(stories, &story)
		}

		return nil
	})
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &types.QueryStoriesResponse{Book: &bookdat, Story: stories, Pagination: pageRes}, nil
}
