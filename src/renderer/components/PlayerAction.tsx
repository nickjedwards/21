import React, { PureComponent } from "react";
import Context from "../context/table";

export default class PlayerAction extends PureComponent {
  static contextType = Context;

  declare context: React.ContextType<typeof Context>;

  render(): JSX.Element {
    const { player, onHit } = this.context;

    return (
      <div className="flex justify-center w-full">
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 rounded-tl-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            onClick={() => onHit(player)}
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
    );
  }
}
