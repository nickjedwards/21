import React, { Component } from "react";

type Props = {
  player: IPlayer;
};

export default class Players extends Component<Props> {
  private getInitials = (playerName: string): string =>
    playerName
      .split(" ")
      .map(name => name[0])
      .join("")
      .toUpperCase();

  private getCard = (card: ICard) => {
    const isRed: boolean = card.isRed();

    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
          isRed ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"
        } mr-2`}
      >
        {card.faceValue}
      </span>
    );
  };

  render(): JSX.Element {
    const { player } = this.props;

    return (
      <div className="relative group py-6 px-5 flex items-center">
        <div className="-m-1 flex-1 block p-1">
          <div
            className="absolute inset-0 group-hover:bg-gray-50"
            aria-hidden="true"
          />
          <div className="flex-1 flex items-center min-w-0 relative">
            <span className="flex-shrink-0 inline-block relative">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
                <span className="font-medium leading-none text-white">
                  {this.getInitials(player.name || "")}
                </span>
              </span>

              <span
                className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"
                aria-hidden="true"
              />
            </span>
            <div className="ml-4 truncate">
              <p className="text-sm font-medium text-gray-900 truncate">
                {player?.name}
              </p>
              {player.hands[0].cards.map(
                card => !card.flipped && this.getCard(card),
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
