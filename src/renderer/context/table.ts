import React from "react";
import Player from "../models/Player";
import Table from "../models/Table";

export default React.createContext<TableContext>({
  table: new Table(),
  player: new Player(),
  onBet() {
    throw new Error("Implement bet");
  },
  onHit() {
    throw new Error("Implement hit");
  },
  onLeave() {
    throw new Error("Implement leave");
  },
});
