package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateBook{}, "storyblock/CreateBook", nil)
	cdc.RegisterConcrete(&MsgCreateStory{}, "storyblock/CreateStory", nil)
	cdc.RegisterConcrete(&MsgDoVote{}, "storyblock/DoVote", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBook{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateStory{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDoVote{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
