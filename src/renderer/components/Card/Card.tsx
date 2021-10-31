import React, { PureComponent } from "react";

type CardProps = {
  face: string;
  value: number;
};

export default class Card extends PureComponent<CardProps> {
  render(): JSX.Element {
    const { face, value } = this.props;

    return (
      <div
        className="card relative h-52 w-36 flex bg-white justify-center items-center rounded-lg text-5xl"
        data-value={`${value} ${face}`}
      >
        {face}
      </div>
    );
  }
}
