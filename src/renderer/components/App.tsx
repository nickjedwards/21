import React, { PureComponent } from "react";
import Login from "./Login";
import TableComponent from "./Table";
import Context from "../context/tableContext";
import Notification from "./Notification/Notification";
import Hand from "../models/Hand";
import Player from "../models/Player";
import Table from "../models/Table";

type AppState = {
  player?: IPlayer;
  table?: ITable;
  notifications: string[];
};

const PREFIX = "21-";

export default class App extends PureComponent<
  Record<string, never>,
  AppState
> {
  state: AppState = {
    player: undefined,
    table: undefined,
    notifications: [],
  };

  // public componentDidMount() {
  //   const table: ITable = Object.assign(
  //     new Table(),
  //     JSON.parse(localStorage.getItem(`${PREFIX}table`) || "{}"),
  //   );

  //   const player: IPlayer = Object.assign(
  //     new Player(),
  //     JSON.parse(localStorage.getItem(`${PREFIX}player`) || "{}"),
  //   );

  //   table.dealer.hands = table.dealer.hands.map(hand => new Hand(hand.cards));
  //   player.hands = player.hands.map(hand => new Hand(hand.cards));

  //   this.setState({ player, table });
  // }

  public onJoin = (playerName = "", tableName = "") => {
    const table: ITable = new Table(1, tableName);
    const player: IPlayer = new Player(1, playerName);

    table.join(player);

    // localStorage.setItem(`${PREFIX}player`, JSON.stringify(player));
    // localStorage.setItem(`${PREFIX}table`, JSON.stringify(table));

    this.setState({
      player,
      table,
      notifications: [`${player.name} has joined the table`],
    });
  };

  public onLeave = () => {
    localStorage.clear();

    this.setState({ player: undefined, table: undefined });
  };

  public render(): JSX.Element {
    const { player, table, notifications } = this.state;

    return (
      <div className="w-screen h-screen flex overflow-hidden">
        {player && table ? (
          <Context.Provider
            value={{
              table,
              leave: this.onLeave,
            }}
          >
            <TableComponent dealer={table.dealer} player={player} />
          </Context.Provider>
        ) : (
          <Login onSubmit={this.onJoin} />
        )}

        <div
          aria-live="assertive"
          className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
        >
          <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
            {notifications.map(notification => (
              <Notification notification={notification} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
