import React, { Component } from "react";

export default class App extends Component {
  // After the component did mount, we set the state each second.
  componentDidMount() {
    //
  }

  // render will know everything!
  render(): JSX.Element {
    return (
      <div className="felt w-screen h-screen flex flex-col">
        <div className="draggable px-20 py-2 bg-gray-200 text-center">21</div>
        <div>Hello, World!</div>
      </div>
    );
  }
}
