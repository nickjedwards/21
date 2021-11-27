import React, { PureComponent } from "react";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import Context from "../context/table";
import Card from "./Card";
import Player from "./Player";
import PlayerAction from "./PlayerAction";
import Bet from "./Bet";
import TableDrawer from "./TableDrawer/TableDrawer";

type State = {
  isTableDrawerOpen: boolean;
};

export default class Table extends PureComponent<Record<string, never>, State> {
  public state = { needsBet: true, isTableDrawerOpen: false };

  static contextType = Context;

  declare context: React.ContextType<typeof Context>;

  public render(): JSX.Element {
    const { isTableDrawerOpen } = this.state;

    const { table, player } = this.context;

    return (
      <div className="felt w-screen h-screen flex overflow-hidden">
        {/* Left side of table */}
        <div className="flex flex-col justify-between w-1/4 p-4">
          {/* Playing deck */}
          <div className="flex justify-center">
            <div className="face-down w-28 h-40 bg-red-200 rounded-lg border-4 border-white shadow-md" />
          </div>

          {/* Game stats */}
          <div className="bg-black bg-opacity-25 rounded-lg">
            <dl className="text-sm text-gray-100 sm:divide-y sm:divide-black sm:divide-opacity-25">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
                <dt className="font-medium">Player</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">{player.name}</dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
                <dt className="font-medium">Balance</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  ${`${player.purse}`}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
                <dt className="font-medium">Bet</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">${player.bet}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Center of table */}
        <div className="flex flex-col justify-between items-center w-2/4">
          {/* Dealer */}
          <div className="flex flex-col justify-between items-center w-full p-4">
            {table.dealer.hands.map(hand => (
              <div className="flex-grow-0 flex-col space-y-6">
                <div className="h-40 flex flex-row justify-center">
                  {hand.cards.map(card => (
                    <Card card={card} />
                  ))}
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                  {table.dealer.name}&apos;s hand: {hand.points()}
                </span>
              </div>
            ))}
          </div>

          {/* Player */}
          {player.bet ? (
            <div className="flex flex-col justify-end items-center w-full">
              <Player />
              <PlayerAction />
            </div>
          ) : (
            <Bet />
          )}
        </div>

        {/* Right side of table */}
        <div className="flex flex-col w-1/4" />

        <TableDrawer
          open={isTableDrawerOpen}
          onClose={() => this.setState({ isTableDrawerOpen: false })}
        />

        <button
          type="button"
          className="absolute bottom-0 right-0 p-4 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
          onClick={() => this.setState({ isTableDrawerOpen: true })}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="absolute inset-x-0 bottom-24 flex justify-center z-0">
          <div className="w-40 h-56 border-4 border-white rounded-lg bottom-24" />
        </div>
      </div>
    );
  }
}
