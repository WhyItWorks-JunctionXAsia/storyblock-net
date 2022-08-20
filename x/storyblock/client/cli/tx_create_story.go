package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"storyblock/x/storyblock/types"
)

var _ = strconv.Itoa(0)

func CmdCreateStory() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-story [story-id] [book-id] [prev-story-id] [height] [title] [body] [created-at]",
		Short: "Broadcast message createStory",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argStoryId := args[0]
			argBookId := args[1]
			argPrevStoryId := args[2]
			argHeight := args[3]
			argTitle := args[4]
			argBody := args[5]
			argCreatedAt := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateStory(
				clientCtx.GetFromAddress().String(),
				argStoryId,
				argBookId,
				argPrevStoryId,
				argHeight,
				argTitle,
				argBody,
				argCreatedAt,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
