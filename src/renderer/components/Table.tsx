import React, { PureComponent } from "react";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import Card from "./Card/Card";
import Players from "./Players/Players";

type Props = {
  table: ITable;
  dealer: IPlayer;
  player: IPlayer;
};

type State = {
  isPlayerDrawerOpen: boolean;
};

export default class Table extends PureComponent<Props, State> {
  public state: State = {
    isPlayerDrawerOpen: false,
  };

  public hit = (hand: IHand): void => {
    const {
      table: { deck },
      player,
    } = this.props;

    player.hit(deck, hand);
  };

  render(): JSX.Element {
    const { isPlayerDrawerOpen } = this.state;

    const { dealer, player } = this.props;

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
                <dt className=" font-medium">Bet</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">$100</dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
                <dt className=" font-medium">Balance</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">$500</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Center of table */}
        <div className="flex flex-col justify-between items-center w-2/4">
          {/* Dealer */}
          <div className="flex flex-col justify-between items-center w-2/4 p-4">
            {dealer.hands.map(hand => (
              <div className="flex-grow-0 flex-col space-y-6">
                <div className="h-40 flex flex-row justify-center">
                  {hand.cards.map(card => (
                    <Card card={card} />
                  ))}
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                  {dealer.name}&apos;s hand: {hand.points()}
                </span>
              </div>
            ))}
          </div>

          {/* Player */}
          <div className="flex flex-col justify-end items-center">
            <div className="flex justify-around w-full -mb-24 z-10">
              {player.hands.map(hand => (
                <div className="flex-grow-0 flex-col space-y-6">
                  <div className="player relative h-40 flex flex-row">
                    {hand.cards.map(card => (
                      <Card card={card} />
                    ))}
                  </div>

                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                    My hand: {hand.points()}
                  </span>
                </div>
              ))}
            </div>

            {/* Player's Bet */}
            <div className="w-40 h-56 flex justify-center items-end border-4 border-white rounded-lg mb-10">
              {/* <div className="chip black" data-value="100" /> */}
            </div>

            {/* Player's actions */}
            <div className="flex justify-center">
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 rounded-tl-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  onClick={() => this.hit(player.hands[0])}
                >
                  Hit
                </button>
                <button
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  Stand
                </button>
                <button
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  Double down
                </button>
                <button
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  Split
                </button>
                <button
                  type="button"
                  className="-ml-px relative inline-flex items-center px-4 py-2 rounded-tr-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  Surrender
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* Right side of table */}
        <div className="flex flex-col w-1/4" />

        <Players
          open={isPlayerDrawerOpen}
          onClose={() => this.setState({ isPlayerDrawerOpen: false })}
        />

        <button
          type="button"
          className="absolute bottom-0 right-0 p-4 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
          onClick={() => this.setState({ isPlayerDrawerOpen: true })}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    );
  }
}
