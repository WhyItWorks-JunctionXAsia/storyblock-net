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

func CmdCreateBook() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-book [book-id] [title] [synopsis] [created-at]",
		Short: "Broadcast message createBook",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argBookId := args[0]
			argTitle := args[1]
			argSynopsis := args[2]
			argCreatedAt := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBook(
				clientCtx.GetFromAddress().String(),
				argBookId,
				argTitle,
				argSynopsis,
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
