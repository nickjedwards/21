import Card, { Suit } from "./Card";

export default class Deck implements IDeck {
  static readonly suits: Suit[] = [
    Suit.Clubs,
    Suit.Diamonds,
    Suit.Hearts,
    Suit.Spades,
  ];

  static readonly values: string[] = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  public cards: ICard[] = [];

  constructor(count = 1) {
    for (let i = 0; i < count; i += 1) {
      this.cards = Deck.suits.flatMap(suit =>
        Deck.values.map(value => new Card(suit, value, true)),
      );
    }
  }

  public shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i -= 1) {
      const index = Math.floor(Math.random() * (i + 1));
      const current = this.cards[index];

      this.cards[index] = this.cards[i];
      this.cards[i] = current;
    }
  }

  public deal(): [ICard, ICard] {
    return [this.hit(), this.hit()];
  }

  public hit(): ICard {
    return this.cards.pop() || new Card(Suit.Joker, "Joker", true);
  }
}
