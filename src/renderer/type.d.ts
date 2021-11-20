interface ICard {
  suit: string;
  value: number;
  flipped: boolean;
  flip(): void;
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

type ContextType = {
  table: ITable | undefined;
  leave(): void;
};
