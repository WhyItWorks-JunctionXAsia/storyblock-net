package keeper

import (
	"storyblock/x/storyblock/types"
)

var _ types.QueryServer = Keeper{}
