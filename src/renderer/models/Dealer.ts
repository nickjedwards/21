import Player from "./Player";

export default class Dealer extends Player {
  public join(deck: IDeck) {
    const cards = deck.deal();
    cards[0].flip();

    this.hands[0].cards.push(...cards);
  }
}
