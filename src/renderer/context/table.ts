import React from "react";

export default React.createContext<TableContext>({
  table: undefined,
  leave: () => new Error("leave"),
});
