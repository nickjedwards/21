import React, { PureComponent } from "react";
import Login from "./Login";
import TableComponent from "./Table";
import TableProvider from "../providers/Table";
import Notification from "./Notification/Notification";
import Player from "../models/Player";
import Table from "../models/Table";

type AppState = {
  player?: IPlayer;
  table?: ITable;
  notifications: string[];
};

export default class App extends PureComponent<
  Record<string, never>,
  AppState
> {
  state: AppState = {
    player: undefined,
    table: undefined,
    notifications: [],
  };

  public onJoin = (playerName = "", tableName = "") => {
    const table: ITable = new Table(1, tableName);
    const player: IPlayer = new Player(1, playerName);

    table.join(player);

    this.setState({
      player,
      table,
      notifications: [`${player.name} has joined the table`],
    });
  };

  public onLeave = (): void => {
    this.setState({ player: undefined, table: undefined });
  };

  public render(): JSX.Element {
    const { player, table, notifications } = this.state;

    return (
      <div className="w-screen h-screen flex overflow-hidden">
        {player && table ? (
          <TableProvider table={table} player={player}>
            <TableComponent
              table={table}
              dealer={table.dealer}
              player={player}
            />
          </TableProvider>
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
