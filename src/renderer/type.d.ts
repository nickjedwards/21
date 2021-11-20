interface ICard {
  suit: string;
  value: number;
  flipped: boolean;
  flip(): ICard;
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
}

interface ITable {
  id?: number;
  name?: string;
  deck: IDeck;
  players: IPlayer[];
  join(player: IPlayer): void;
}

type ContextType = {
  table: ITable | undefined;
  leave(): void;
};
