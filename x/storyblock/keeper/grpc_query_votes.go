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

func (k Keeper) Votes(goCtx context.Context, req *types.QueryVotesRequest) (*types.QueryVotesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var votes []*types.Vote
	ctx := sdk.UnwrapSDKContext(goCtx)
	store := ctx.KVStore(k.storeKey)
	storyStore := prefix.NewStore(store, []byte(types.StoryKey))
	voteStore := prefix.NewStore(store, []byte(types.VoteKey))
	bookStore := prefix.NewStore(store, []byte(types.BookKey))

	var bookdat types.Book
	temp := bookStore.Get([]byte(req.BookId))
	if temp == nil {
		return nil, status.Error(codes.NotFound, "No Book")
	}
	k.cdc.Unmarshal(temp, &bookdat)
	var stdat types.Story
	pageRes, err := query.Paginate(voteStore, req.Pagination, func(key []byte, value []byte) error {
		var vote types.Vote
		if err := k.cdc.Unmarshal(value, &vote); err != nil {
			return err
		}
		temp := storyStore.Get([]byte(vote.StoryId))
		if temp == nil {
			return nil
		}
		k.cdc.Unmarshal(temp, &stdat)
		if stdat.BookId == req.BookId {
			votes = append(votes, &vote)
		}

		return nil
	})
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &types.QueryVotesResponse{Book: &bookdat, Vote: votes, Pagination: pageRes}, nil
}
