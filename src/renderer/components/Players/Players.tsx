import React, { Fragment, PureComponent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Context from "../../context/table";
import Player from "./Player";

type PlayersProps = {
  open: boolean;
  onClose: () => void;
};

export default class Players extends PureComponent<PlayersProps> {
  static contextType = Context;

  public context!: React.ContextType<typeof Context>;

  render(): JSX.Element {
    const { open, onClose } = this.props;
    const { table, onLeave } = this.context;

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={onClose}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                    <div className="min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            {table?.name} Players
                          </Dialog.Title>
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              type="button"
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                              onClick={onClose}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <ul className="mt-6 relative flex-1 divide-y divide-gray-200 overflow-y-auto">
                        {table?.players.map(player => (
                          <li key={player.id}>
                            <Player player={player} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                      <button
                        type="button"
                        className="bg-red-100 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        onClick={onLeave}
                      >
                        Leave table
                      </button>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
}
