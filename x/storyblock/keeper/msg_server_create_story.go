package keeper

import (
	"context"
	"errors"

	"storyblock/x/storyblock/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateStory(goCtx context.Context, msg *types.MsgCreateStory) (*types.MsgCreateStoryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	var story = types.Story{
		Creator:     msg.Creator,
		Keplr:       msg.Keplr,
		StoryId:     msg.StoryId,
		BookId:      msg.BookId,
		PrevStoryId: msg.PrevStoryId,
		Height:      msg.Height,
		Title:       msg.Title,
		Body:        msg.Body,
		CreatedAt:   msg.CreatedAt,
	}
	// TODO: Handling the message

	succ := k.AppendStory(ctx, story)

	if succ != 0 {
		return &types.MsgCreateStoryResponse{RetCode: succ}, errors.New("Book or Previous Story not exists")
	}
	return &types.MsgCreateStoryResponse{RetCode: succ}, nil
}
