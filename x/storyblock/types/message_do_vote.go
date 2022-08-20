package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDoVote = "do_vote"

var _ sdk.Msg = &MsgDoVote{}

func NewMsgDoVote(creator string, keplr string, storyId string) *MsgDoVote {
	return &MsgDoVote{
		Creator: creator,
		Keplr:   keplr,
		StoryId: storyId,
	}
}

func (msg *MsgDoVote) Route() string {
	return RouterKey
}

func (msg *MsgDoVote) Type() string {
	return TypeMsgDoVote
}

func (msg *MsgDoVote) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDoVote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDoVote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
