import React, { Fragment, PureComponent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

type PlayersProps = {
  open: boolean;
  onClose: () => void;
};

export default class Players extends PureComponent<PlayersProps> {
  render(): JSX.Element {
    const { open, onClose } = this.props;

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={onClose}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
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
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Players
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-green-500"
                            onClick={() => onClose()}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <ul className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                      <li>
                        <div className="relative group py-6 px-5 flex items-center">
                          <div className="-m-1 flex-1 block p-1">
                            <div
                              className="absolute inset-0 group-hover:bg-gray-50"
                              aria-hidden="true"
                            />
                            <div className="flex-1 flex items-center min-w-0 relative">
                              <span className="flex-shrink-0 inline-block relative">
                                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
                                  <span className="font-medium leading-none text-white">
                                    NE
                                  </span>
                                </span>

                                <span
                                  className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"
                                  aria-hidden="true"
                                />
                              </span>
                              <div className="ml-4 truncate">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  Nick Edwards
                                </p>
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                  7 ♣
                                </span>
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 ml-2">
                                  2 ♦
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
