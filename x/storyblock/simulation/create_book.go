package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"storyblock/x/storyblock/keeper"
	"storyblock/x/storyblock/types"
)

func SimulateMsgCreateBook(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCreateBook{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CreateBook simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CreateBook simulation not implemented"), nil, nil
	}
}
