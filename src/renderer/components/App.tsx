import React, { PureComponent } from "react";
import Login from "./Login";
import Table from "./Table";
import Context from "../context/tableContext";

type AppState = {
  name: string;
  table: ITable | undefined;
};

const PREFIX = "21-";

export default class App extends PureComponent<
  Record<string, never>,
  AppState
> {
  state: AppState = {
    name: "",
    table: undefined,
  };

  public componentDidMount() {
    const name = localStorage.getItem(`${PREFIX}name`) || "";
    const table: ITable | undefined = JSON.parse(
      localStorage.getItem(`${PREFIX}table`) || "",
    );

    this.setState({ name, table });
  }

  public onJoin = (name = "") => {
    localStorage.setItem(`${PREFIX}name`, name);

    this.setState({
      name,
      table: { id: 1, name: "winner winner", players: [] },
    });
  };

  public onLeave = () => {
    localStorage.clear();

    this.setState({ name: "", table: undefined });
  };

  public render(): JSX.Element {
    const { name, table } = this.state;

    return (
      <div className="w-screen h-screen flex overflow-hidden">
        {name && table ? (
          <Context.Provider
            value={{
              table,
              leave: this.onLeave,
            }}
          >
            <Table />
          </Context.Provider>
        ) : (
          <Login onSubmit={this.onJoin} />
        )}
      </div>
    );
  }
}
