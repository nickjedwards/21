import Card, { Suit, Value } from "./Card";

export default class Deck implements IDeck {
  static readonly suits: Suit[] = [
    Suit.Clubs,
    Suit.Diamonds,
    Suit.Hearts,
    Suit.Spades,
  ];

  static readonly values: Value[] = [
    Value.Two,
    Value.Three,
    Value.Four,
    Value.Five,
    Value.Six,
    Value.Seven,
    Value.Eight,
    Value.Nine,
    Value.Ten,
    Value.Jack,
    Value.Queen,
    Value.King,
    Value.Ace,
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
    return this.cards.pop() || new Card(Suit.Joker, Value.Joker, true);
  }
}
