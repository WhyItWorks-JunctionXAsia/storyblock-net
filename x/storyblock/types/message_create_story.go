package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateStory = "create_story"

var _ sdk.Msg = &MsgCreateStory{}

func NewMsgCreateStory(creator string, keplr string, storyId string, bookId string, prevStoryId string, height string, title string, body string, createdAt string) *MsgCreateStory {
	return &MsgCreateStory{
		Creator:     creator,
		Keplr:       keplr,
		StoryId:     storyId,
		BookId:      bookId,
		PrevStoryId: prevStoryId,
		Height:      height,
		Title:       title,
		Body:        body,
		CreatedAt:   createdAt,
	}
}

func (msg *MsgCreateStory) Route() string {
	return RouterKey
}

func (msg *MsgCreateStory) Type() string {
	return TypeMsgCreateStory
}

func (msg *MsgCreateStory) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateStory) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateStory) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
