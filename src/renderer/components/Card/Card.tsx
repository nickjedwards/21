import React, { PureComponent } from "react";

type Props = {
  card: ICard;
};

export default class Card extends PureComponent<Props> {
  render(): JSX.Element {
    const { card } = this.props;

    return (
      <div
        className={`card ${
          card.flipped ? "face-down bg-red-200" : "face-up bg-white"
        } ${
          card.isRed() ? "text-red-500" : "text-black"
        } w-28 h-40 flex justify-center items-center rounded-lg border-4 border-white text-5xl`}
        data-value={card.faceValue}
      >
        {card.flipped ? "" : card.suit}
      </div>
    );
  }
}
