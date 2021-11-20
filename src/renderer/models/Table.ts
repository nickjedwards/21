import Dealer from "./Dealer";
import Deck from "./Deck";

export default class Table implements ITable {
  public id?: number;

  public name?: string;

  public deck: IDeck;

  public dealer: IPlayer;

  public players: IPlayer[] = [];

  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name;
    this.deck = new Deck();

    this.deck.shuffle();

    this.dealer = new Dealer(undefined, "Goose");

    this.join(this.dealer);
  }

  public join(player: IPlayer): void {
    player.join(this.deck);

    this.players.push(player);
  }
}
