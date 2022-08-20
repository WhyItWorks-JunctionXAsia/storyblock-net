package storyblock_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "storyblock/testutil/keeper"
	"storyblock/testutil/nullify"
	"storyblock/x/storyblock"
	"storyblock/x/storyblock/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.StoryblockKeeper(t)
	storyblock.InitGenesis(ctx, *k, genesisState)
	got := storyblock.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
