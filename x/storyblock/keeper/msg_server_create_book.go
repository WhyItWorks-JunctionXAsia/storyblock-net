package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"storyblock/x/storyblock/types"
)

func (k msgServer) CreateBook(goCtx context.Context, msg *types.MsgCreateBook) (*types.MsgCreateBookResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateBookResponse{}, nil
}
