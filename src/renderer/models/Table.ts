import Deck from "./Deck";

export default class Table implements ITable {
  public id?: number;

  public name?: string;

  public deck: IDeck;

  public players: IPlayer[] = [];

  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name;
    this.deck = new Deck();

    this.deck.shuffle();
  }

  public join(player: IPlayer) {
    player.hands[0].cards = this.deck.deal();

    this.players.push(player);
  }
}
