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

func CmdDoVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "do-vote [keplr] [story-id]",
		Short: "Broadcast message doVote",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argKeplr := args[0]
			argStoryId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDoVote(
				clientCtx.GetFromAddress().String(),
				argKeplr,
				argStoryId,
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
