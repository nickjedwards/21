interface ICard {
  suit: string;
  value: string;
  flipped: boolean;
  numberValue: number;
  faceValue: string;
  flip(): void;
  isRed(): boolean;
  isAce(): boolean;
}

interface IDeck {
  cards: ICard[];
  shuffle(): void;
  deal(): [ICard, ICard];
  hit(): ICard;
}

interface IHand {
  cards: ICard[];
  points: () => number;
}

interface IPlayer {
  id?: number;
  name?: string;
  hands: IHand[];
  purse: number;
  bet: number;
  join(deck: IDeck): void;
}

interface ITable {
  id?: number;
  name?: string;
  deck: IDeck;
  dealer: IPlayer;
  players: IPlayer[];
  join(player: IPlayer): void;
}

type TableContext = {
  table: ITable;
  player: IPlayer;
  onBet(bet: number): void;
  onHit(player: IPlayer): void;
  onLeave(): void;
};
