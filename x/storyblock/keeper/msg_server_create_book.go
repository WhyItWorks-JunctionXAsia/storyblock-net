package keeper

import (
	"context"

	"storyblock/x/storyblock/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateBook(goCtx context.Context, msg *types.MsgCreateBook) (*types.MsgCreateBookResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	var book = types.Book{
		Creator:   msg.Creator,
		Title:     msg.Title,
		Synopsis:  msg.Synopsis,
		InitId:    0,
		CreatedAt: msg.CreatedAt,
	}

	id := k.AppendBook(ctx, book)

	return &types.MsgCreateBookResponse{Id: id}, nil
}
