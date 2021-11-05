import React, { PureComponent } from "react";
import Login from "./Login";
import Table from "./Table";

type AppState = {
  name: string;
  table: string;
};

const PREFIX = "21-";

export default class App extends PureComponent<
  Record<string, never>,
  AppState
> {
  state: AppState = {
    name: "",
    table: "",
  };

  public componentDidMount() {
    const name = localStorage.getItem(`${PREFIX}name`) || "";
    const table = localStorage.getItem(`${PREFIX}table`) || "";

    this.setState({ name, table });
  }

  public onJoin = (name: string, table: string) => {
    localStorage.setItem(`${PREFIX}name`, name);
    localStorage.setItem(`${PREFIX}table`, table);

    this.setState({ name, table });
  };

  public render(): JSX.Element {
    const { name, table } = this.state;

    return (
      <div className="w-screen h-screen flex overflow-hidden">
        {name && table ? <Table /> : <Login onSubmit={this.onJoin} />}
      </div>
    );
  }
}
