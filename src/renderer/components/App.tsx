import React, { Component } from "react";
import Card from "./Card/Card";
import Players from "./Players/Players";

export default class App extends Component {
  // After the component did mount, we set the state each second.
  componentDidMount() {
    //
  }

  // render will know everything!
  render(): JSX.Element {
    return (
      <div className="felt w-screen h-screen flex flex-col">
        {/* Dealer */}
        <div className="h-1/2" />
        {/* Player */}
        <div className="h-1/2 flex justify-evenly">
          <div className="relative md:w-1/3">
            <div className="absolute top-0 left-0 flex flex-row h-52 ml-4">
              <Card face="♣" value={7} />
              <Card face="♦" value={2} />
            </div>
            <div className="w-40 h-56 flex justify-center items-center border-4 border-white mt-44 rounded-lg">
              {/* Bet */}
              <div className="chip black" data-value="100" />
            </div>
          </div>
          <div className="relative md:w-1/3">
            <div className="absolute top-0 left-0 flex flex-row h-52 ml-4">
              <Card face="♣" value={3} />
              <Card face="♦" value={6} />
            </div>
            <div className="w-40 h-56 flex justify-center items-center border-4 border-white mt-44 rounded-lg">
              {/* Bet */}
              <div className="chip black" data-value="50" />
            </div>
          </div>
        </div>

        <Players />

        <div className="absolute bottom-0 left-0 bg-black bg-opacity-25 rounded-lg ml-1 mb-1">
          <dl className="text-sm text-gray-100 sm:divide-y sm:divide-black sm:divide-opacity-25">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
              <dt className="font-medium">Count</dt>
              <dd className="mt-1 sm:mt-0 sm:col-span-2">9</dd>
            </div>
            <div className="py-4  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
              <dt className=" font-medium">Bet</dt>
              <dd className="mt-1 sm:mt-0 sm:col-span-2">$100</dd>
            </div>
            <div className="py-4  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
              <dt className=" font-medium">Purse</dt>
              <dd className="mt-1 sm:mt-0 sm:col-span-2">$500</dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }
}
