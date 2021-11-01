import React, { PureComponent } from "react";

type CardProps = {
  face: string;
  value: number;
  flipped: boolean;
};

export default class Card extends PureComponent<CardProps> {
  public static defaultProps = {
    flipped: false,
  };

  render(): JSX.Element {
    const { face, value, flipped } = this.props;

    return (
      <div
        className={`card ${
          flipped ? "face-down bg-red-200" : "face-up bg-white"
        } w-28 h-40 flex justify-center items-center rounded-lg border-4 border-white text-5xl`}
        data-value={`${value} ${face}`}
      >
        {flipped ? "" : face}
      </div>
    );
  }
}
