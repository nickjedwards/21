import React from "react";
import Player from "../models/Player";
import Table from "../models/Table";

export default React.createContext<TableContext>({
  table: new Table(),
  player: new Player(),
  hit() {
    throw new Error("Implement hit");
  },
  leave() {
    throw new Error("Implement leave");
  },
});
