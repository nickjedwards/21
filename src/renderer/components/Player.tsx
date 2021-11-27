import React, { PureComponent } from "react";
import Context from "../context/table";
import Card from "./Card";

export default class Player extends PureComponent {
  static contextType = Context;

  declare context: React.ContextType<typeof Context>;

  render(): JSX.Element {
    const { player } = this.context;

    return (
      <div className="flex flex-col justify-around space-y-6 mb-20 z-10">
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

        <div className="chip black" data-value={player.bet} />
      </div>
    );
  }
}
