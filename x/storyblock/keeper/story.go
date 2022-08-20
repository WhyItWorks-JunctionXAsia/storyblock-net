package keeper

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"storyblock/x/storyblock/types"
)

func (k Keeper) AppendStory(ctx sdk.Context, story types.Story) int32 {

	// Get the store
	storyStore := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.StoryKey))
	bookStore := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BookKey))

	// Convert the post ID into bytes
	byteKey := []byte(story.StoryId)

	bookbyteKey := []byte(story.BookId)

	t, _ := strconv.ParseInt(story.Height, 10, 64)
	if t > 0 {
		prevbyteKey := []byte(story.PrevStoryId)
		stdat := storyStore.Get(prevbyteKey)
		if stdat == nil {
			return -2
		}
		var converted types.Story
		k.cdc.Unmarshal(stdat, &converted)
	}

	bz := bookStore.Get(bookbyteKey)
	if bz == nil {
		return -1
	}

	// Marshal the post into bytes
	appendedValue := k.cdc.MustMarshal(&story)

	// Insert the post bytes using post ID as a key
	storyStore.Set(byteKey, appendedValue)

	return 0
}
