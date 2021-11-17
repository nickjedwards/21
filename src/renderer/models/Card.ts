export enum Suit {
  Clubs = "♣",
  Diamonds = "♦",
  Hearts = "♥",
  Spades = "♠",
}

export default class Card implements ICard {
  constructor(
    public suit: Suit,
    public value: number,
    public flipped: boolean,
  ) {
    // eslint-disable-next-line no-console
    console.log();
  }
}
