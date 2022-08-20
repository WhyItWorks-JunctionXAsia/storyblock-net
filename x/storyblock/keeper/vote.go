package keeper

import (
	"encoding/json"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"storyblock/x/storyblock/types"
)

func (k Keeper) AppendVote(ctx sdk.Context, vote types.Vote) int32 {

	// Get the store
	storyStore := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.StoryKey))
	voteStore := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.VoteKey))
	winnerStore := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.VoteWinnerKey))

	var gotstory types.Story
	k.cdc.Unmarshal(storyStore.Get([]byte(vote.StoryId)), &gotstory)

	byteKey := []byte(vote.StoryId)
	bookKey := []byte(gotstory.BookId)

	var winners map[uint64]string
	winbyte := winnerStore.Get(bookKey)
	if winbyte != nil {
		json.Unmarshal(winbyte, &winners)
		for i, _ := range winners {
			if strconv.FormatUint(i, 10) == gotstory.Height {
				return -1 //already win!
			}
		}
	}
	winners = make(map[uint64]string)
	no, err := strconv.ParseUint(gotstory.Height, 10, 64)
	if err != nil {
		return -1
	}
	winners[no] = gotstory.StoryId

	newval, _ := json.Marshal(&winners)
	winnerStore.Set(bookKey, newval)

	// Marshal the post into bytes
	appendedValue := k.cdc.MustMarshal(&vote)

	// Insert the post bytes using post ID as a key
	voteStore.Set(byteKey, appendedValue)

	return 0
}
