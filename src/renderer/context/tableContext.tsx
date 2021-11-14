import React from "react";

export default React.createContext<ContextType>({
  table: undefined,
  leave: () => new Error("leave"),
});
