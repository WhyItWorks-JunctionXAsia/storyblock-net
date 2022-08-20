package storyblock

import (
	"math/rand"

	"storyblock/testutil/sample"
	storyblocksimulation "storyblock/x/storyblock/simulation"
	"storyblock/x/storyblock/types"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = storyblocksimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateBook = "op_weight_msg_create_book"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBook int = 100

	opWeightMsgCreateStory = "op_weight_msg_create_story"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateStory int = 100

	opWeightMsgDoVote = "op_weight_msg_do_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDoVote int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	storyblockGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&storyblockGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateBook int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBook, &weightMsgCreateBook, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBook = defaultWeightMsgCreateBook
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBook,
		storyblocksimulation.SimulateMsgCreateBook(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateStory int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateStory, &weightMsgCreateStory, nil,
		func(_ *rand.Rand) {
			weightMsgCreateStory = defaultWeightMsgCreateStory
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateStory,
		storyblocksimulation.SimulateMsgCreateStory(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDoVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDoVote, &weightMsgDoVote, nil,
		func(_ *rand.Rand) {
			weightMsgDoVote = defaultWeightMsgDoVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDoVote,
		storyblocksimulation.SimulateMsgDoVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
