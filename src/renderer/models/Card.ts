export enum Suit {
  Clubs = "♣",
  Diamonds = "♦",
  Hearts = "♥",
  Spades = "♠",
  Joker = "🃏",
}

export enum Value {
  Joker = 0,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Jack = 10,
  Queen = 10,
  King = 10,
  Ace = 11,
}

export default class Card implements ICard {
  public suit: Suit;

  public value: Value;

  public flipped: boolean;

  constructor(suit: Suit, value: Value, flipped: boolean) {
    this.suit = suit;
    this.value = value;
    this.flipped = flipped;
  }

  public flip(): ICard {
    this.flipped = !this.flipped;

    return this;
  }
}
