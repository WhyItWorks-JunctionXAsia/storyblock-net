package keeper

import (
	"context"

	"storyblock/x/storyblock/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) DoVote(goCtx context.Context, msg *types.MsgDoVote) (*types.MsgDoVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	var votedat = types.Vote{
		Keplr:   msg.Keplr,
		StoryId: msg.StoryId,
	}

	rc := k.AppendVote(ctx, votedat)

	if rc < 0 {
		return nil, status.Error(codes.Internal, "Already On Top")
	}

	return &types.MsgDoVoteResponse{}, nil
}
