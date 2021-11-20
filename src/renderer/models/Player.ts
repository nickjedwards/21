import Hand from "./Hand";

export default class Player implements IPlayer {
  public id?: number;

  public name?: string;

  public hands: IHand[];

  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name;

    this.hands = [new Hand()];
  }

  public join(deck: IDeck) {
    deck.deal().forEach((card: ICard) => {
      card.flip();
      this.hands[0].cards.push(card);
    });
  }
}
