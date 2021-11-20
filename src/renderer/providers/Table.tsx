import React, { PureComponent } from "react";
import Context from "../context/table";

type Props = {
  children: React.ReactNode;
  table: ITable;
  player: IPlayer;
};

type State = {
  player?: IPlayer;
  table?: ITable;
};

export default class TableProvider extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const { player, table } = this.props;

    this.state = { player, table };
  }

  render(): JSX.Element {
    const { children } = this.props;
    const { table } = this.state;

    return (
      <Context.Provider
        value={{
          table,
          leave: () => new Error("Oops"),
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}
