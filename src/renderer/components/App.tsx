import React, { Component } from "react";
import Card from "./Card/Card";
import Players from "./Players/Players";
import Notification from "./Notification/Notification";

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
        <div className="flex justify-center w-full p-4">
          <div className="h-40 flex flex-row">
            <Card face="♣" value={7} />
            <Card face="♣" value={7} />
          </div>
        </div>

        {/* Player */}
        <div className="flex flex-1">
          <div className="flex flex-col justify-end md:w-1/5 p-4">
            <div className="bg-black bg-opacity-25 rounded-lg">
              <dl className="text-sm text-gray-100 sm:divide-y sm:divide-black sm:divide-opacity-25">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
                  <dt className="font-medium">Count</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">9</dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
                  <dt className=" font-medium">Bet</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">$100</dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
                  <dt className=" font-medium">Purse</dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">$500</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="flex flex-col justify-end items-center md:w-3/5 p-4">
            <div className="flex justify-around w-full -mb-6">
              <div className="player-deck relative w-28 h-40 flex flex-row">
                <Card face="♣" value={7} />
                <Card face="♦" value={2} />
                <Card face="♦" value={2} />
                <Card face="♦" value={2} />
              </div>
              {/* <div className="player-deck relative w-28 h-40 flex flex-row">
                <Card face="♣" value={7} />
                <Card face="♦" value={2} />
                <Card face="♦" value={2} />
                <Card face="♦" value={2} />
              </div> */}
            </div>
            <div className="w-40 h-56 flex justify-center items-center border-4 border-white rounded-lg">
              {/* Bet */}
              <div className="chip black" data-value="100" />
            </div>
          </div>

          <div className="md:w-1/5" />
        </div>

        <div className="flex justify-center">
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 rounded-tl-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            >
              Hit
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            >
              Stand
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            >
              Double down
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            >
              Split
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-tr-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            >
              Surrender
            </button>
          </span>
        </div>

        {/* <Players /> */}

        <Notification />
      </div>
    );
  }
}
