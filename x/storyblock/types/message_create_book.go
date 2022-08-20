package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateBook = "create_book"

var _ sdk.Msg = &MsgCreateBook{}

func NewMsgCreateBook(creator string, keplr string, bookId string, title string, synopsis string, createdAt string) *MsgCreateBook {
	return &MsgCreateBook{
		Creator:   creator,
		Keplr:     keplr,
		BookId:    bookId,
		Title:     title,
		Synopsis:  synopsis,
		CreatedAt: createdAt,
	}
}

func (msg *MsgCreateBook) Route() string {
	return RouterKey
}

func (msg *MsgCreateBook) Type() string {
	return TypeMsgCreateBook
}

func (msg *MsgCreateBook) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBook) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBook) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
