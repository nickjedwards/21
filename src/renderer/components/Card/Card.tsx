import React, { PureComponent } from "react";

export default class Card extends PureComponent<ICard> {
  public static defaultProps = {
    flipped: false,
  };

  get value(): string {
    const { value } = this.props;

    return value === 11 ? "A" : String(value);
  }

  get isRed(): boolean {
    const { suit } = this.props;

    return ["♥", "♦"].some((item: string) => item === suit);
  }

  render(): JSX.Element {
    const { suit, flipped } = this.props;

    return (
      <div
        className={`card ${
          flipped ? "face-down bg-red-200" : "face-up bg-white"
        } ${
          this.isRed ? "text-red-500" : "text-black"
        } w-28 h-40 flex justify-center items-center rounded-lg border-4 border-white text-5xl`}
        data-value={`${this.value} ${suit}`}
      >
        {flipped ? "" : suit}
      </div>
    );
  }
}
