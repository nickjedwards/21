import React, { PureComponent } from "react";
import Login from "./Login";
import Table from "./Table";
import Context from "../context/tableContext";

type AppState = {
  player?: IPlayer;
  table?: ITable;
};

const PREFIX = "21-";

export default class App extends PureComponent<
  Record<string, never>,
  AppState
> {
  state: AppState = {
    player: undefined,
    table: undefined,
  };

  public componentDidMount() {
    const player: string | null = localStorage.getItem(`${PREFIX}player`);
    const table: string | null = localStorage.getItem(`${PREFIX}table`);

    this.setState({
      player: player ? JSON.parse(player) : undefined,
      table: table ? JSON.parse(table) : undefined,
    });
  }

  public onJoin = (playerName = "", tableName = "") => {
    const player: IPlayer = { name: playerName, hands: [] };
    const table: ITable = { id: 1, name: tableName, players: [player] };

    localStorage.setItem(`${PREFIX}player`, JSON.stringify(player));
    localStorage.setItem(`${PREFIX}table`, JSON.stringify(table));

    this.setState({
      player,
      table,
    });
  };

  public onLeave = () => {
    localStorage.clear();

    this.setState({ player: undefined, table: undefined });
  };

  public render(): JSX.Element {
    const { player, table } = this.state;

    return (
      <div className="w-screen h-screen flex overflow-hidden">
        {player && table ? (
          <Context.Provider
            value={{
              table,
              leave: this.onLeave,
            }}
          >
            <Table />
          </Context.Provider>
        ) : (
          <Login onSubmit={this.onJoin} />
        )}
      </div>
    );
  }
}
