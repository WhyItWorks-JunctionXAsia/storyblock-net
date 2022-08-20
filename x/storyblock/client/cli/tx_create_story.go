package cli

import (
	"strconv"

	"storyblock/x/storyblock/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateStory() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-story [story-id] [book-id] [prev-story-id] [height] [title] [body] [created-at]",
		Short: "Broadcast message createStory",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argKeplr := args[0]
			argStoryId := args[1]
			argBookId := args[2]
			argPrevStoryId := args[3]
			argHeight := args[4]
			argTitle := args[5]
			argBody := args[6]
			argCreatedAt := args[7]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateStory(
				clientCtx.GetFromAddress().String(),
				argKeplr,
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
