import React, { Component } from "react";
import TableContext from "../context/table";

type Props = {
  children: React.ReactNode;
  player: IPlayer;
  table: ITable;
  onLeave(): void;
};

type State = {
  player: IPlayer;
  table: ITable;
};

export default class TableProvider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      player: props.player,
      table: props.table,
    };
  }

  public onBet = (bet: number): void => {
    const { player } = this.state;

    player.purse -= bet;
    player.bet = bet;

    this.setState({ player });
  };

  public onHit = (player: IPlayer): void => {
    const { table } = this.state;

    const card: ICard = table.deck.hit();
    card.flip();

    player.hands[0].cards.push(card);

    this.setState({ player });
  };

  render(): JSX.Element {
    const { children, onLeave } = this.props;
    const { table, player } = this.state;
    const { onBet, onHit } = this;

    return (
      <TableContext.Provider
        value={{
          table,
          player,
          onBet,
          onHit,
          onLeave,
        }}
      >
        {children}
      </TableContext.Provider>
    );
  }
}
