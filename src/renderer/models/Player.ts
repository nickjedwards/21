export default class Player implements IPlayer {
  public id?: number;

  public name?: string;

  public hands: IHand[] = [];
}
