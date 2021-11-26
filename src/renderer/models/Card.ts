export enum Suit {
  Clubs = "♣",
  Diamonds = "♦",
  Hearts = "♥",
  Spades = "♠",
  Joker = "🃏",
}

const Value = {
  Joker: 0,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 11,
} as const;

export type Value = typeof Value[keyof typeof Value];

export default class Card implements ICard {
  public suit: Suit;

  public value: string;

  public flipped: boolean;

  constructor(suit: Suit, value: string, flipped: boolean) {
    this.suit = suit;
    this.value = value;
    this.flipped = flipped;
  }

  get faceValue(): string {
    return `${this.isAce() ? "A" : String(this.value)} ${this.suit}`;
  }

  public flip(): void {
    this.flipped = !this.flipped;
  }

  public isRed(): boolean {
    return [Suit.Diamonds, Suit.Hearts].some(
      (suit: Suit) => suit === this.suit,
    );
  }

  public isAce(): boolean {
    return this.value === "A";
  }
}
