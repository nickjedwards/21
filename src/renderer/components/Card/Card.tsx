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
        className="card relative w-1/2 h-full flex bg-white rounded-lg justify-center items-center text-5xl"
        data-value={`${value} ${face}`}
      >
        {face}
      </div>
    );
  }
}
