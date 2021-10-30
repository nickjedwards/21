import React, { Component } from "react";
import Card from "./Card/Card";

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
        <div className="h-1/3" />
        {/* Player */}
        <div className="h-2/3 flex justify-evenly">
          <div className="md:w-1/5">
            <div className="h-1/2 flex flex-row">
              <Card face="♣" value={3} />
              <Card face="♦" value={6} />
            </div>
            <div className="h-1/2 border-4 border-white rounded-lg">
              {/* Bet */}
              <div className="pokerchip black" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 rounded-lg ml-1 mb-1">
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
