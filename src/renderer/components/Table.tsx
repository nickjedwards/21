import React, { PureComponent } from "react";
import Card from "./Card/Card";
import Players from "./Players/Players";
import Notification from "./Notification/Notification";

export default class Table extends PureComponent {
  render(): JSX.Element {
    return (
      <div className="felt w-screen h-screen flex overflow-hidden">
        {/* Left side of table */}
        <div className="flex flex-col justify-between w-1/4 p-4">
          {/* Playing deck */}
          <div className="flex justify-center">
            <div className="face-down w-28 h-40 bg-red-200 rounded-lg border-4 border-white shadow-md" />
          </div>
          {/* Game stats */}
          <div className="bg-black bg-opacity-25 rounded-lg">
            <dl className="text-sm text-gray-100 sm:divide-y sm:divide-black sm:divide-opacity-25">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
                <dt className=" font-medium">Bet</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">$100</dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-5">
                <dt className=" font-medium">Balance</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">$500</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Center of table */}
        <div className="flex flex-col justify-between items-center w-2/4">
          {/* Dealer */}
          <div className="flex flex-col justify-between items-center w-2/4 p-4">
            <div className="h-40 flex flex-row justify-center mb-6">
              <Card suit="♣" value={7} />
              <Card suit="♣" value={7} flipped />
            </div>

            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
              Dealer&apos;s hand: 7
            </span>
          </div>

          {/* Player */}
          <div>
            <div className="flex flex-col justify-end items-center">
              <div className="flex justify-around w-full -mb-6">
                <div className="player relative w-28 h-40 flex flex-row">
                  <Card suit="♣" value={7} />
                  <Card suit="♦" value={2} />
                </div>
                {/* <div className="player relative w-28 h-40 flex flex-row">
                  <Card suit="♣" value={7} />
                  <Card suit="♦" value={2} />
                  <Card suit="♦" value={2} />
                  <Card suit="♦" value={2} />
                </div> */}
              </div>
              <div className="w-40 h-56 flex justify-center items-center border-4 border-white rounded-lg">
                {/* Bet */}
                <div className="chip black" data-value="100" />
              </div>

              <span className="my-6 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                My hand: 9
              </span>
            </div>

            {/* Player actions */}
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
          </div>
        </div>

        {/* Right side of table */}
        <div className="flex flex-col w-1/4" />

        <Players />

        <Notification />
      </div>
    );
  }
}
