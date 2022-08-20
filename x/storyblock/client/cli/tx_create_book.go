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

func CmdCreateBook() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-book [book-id] [title] [synopsis] [created-at]",
		Short: "Broadcast message createBook",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argKeplr := args[0]
			argBookId := args[1]
			argTitle := args[2]
			argSynopsis := args[3]
			argCreatedAt := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBook(
				clientCtx.GetFromAddress().String(),
				argKeplr,
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
