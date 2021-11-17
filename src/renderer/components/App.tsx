import React, { PureComponent } from "react";
import Login from "./Login";
import Table from "./Table";
import Context from "../context/tableContext";
import Notification from "./Notification/Notification";
import Card, { Suit } from "../models/Card";
import Hand from "../models/Hand";
import Player from "../models/Player";

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

  public componentDidMount() {
    const player: IPlayer = Object.assign(
      new Player(),
      JSON.parse(localStorage.getItem(`${PREFIX}player`) || "{}"),
    );

    player.hands = player.hands.map(hand => new Hand(hand.cards));

    const table: string | null = localStorage.getItem(`${PREFIX}table`);

    this.setState({
      player,
      table: table ? JSON.parse(table) : undefined,
    });
  }

  public onJoin = (playerName = "", tableName = "") => {
    const player: IPlayer = {
      id: 1,
      name: playerName,
      hands: [
        new Hand([
          new Card(Suit.Hearts, 4, false),
          new Card(Suit.Clubs, 5, false),
        ]),
        new Hand([
          new Card(Suit.Spades, 1, false),
          new Card(Suit.Diamonds, 6, false),
        ]),
      ],
    };
    const table: ITable = { id: 1, name: tableName, players: [player] };

    localStorage.setItem(`${PREFIX}player`, JSON.stringify(player));
    localStorage.setItem(`${PREFIX}table`, JSON.stringify(table));

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
            <Table player={player} />
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
