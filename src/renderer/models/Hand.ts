export default class Hand implements IHand {
  public cards: ICard[];

  constructor(cards: ICard[] = []) {
    this.cards = cards;
  }

  public points(): number {
    return this.cards.reduce((acc: number, card: ICard) => {
      if (!card.flipped) {
        return acc + card.value;
      }

      return acc;
    }, 0);
  }
}
