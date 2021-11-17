export default class Hand implements IHand {
  constructor(public cards: ICard[]) {
    // eslint-disable-next-line no-console
    console.log();
  }

  public points(): number {
    return this.cards.reduce((acc: number, card: ICard) => acc + card.value, 0);
  }
}
