interface ICard {
  suit: string;
  value: number;
  flipped: boolean;
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
  id: number;
  name: string;
  players: IPlayer[];
}

type ContextType = {
  table: ITable | undefined;
  leave: () => void;
};
