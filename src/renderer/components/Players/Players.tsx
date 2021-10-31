import React, { Fragment, PureComponent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

type PlayersState = {
  open: boolean;
};

export default class Players extends PureComponent<
  Record<string, never>,
  PlayersState
> {
  state: PlayersState = {
    open: true,
  };

  public onClose = () => {
    this.setState({ open: false });
  };

  render(): JSX.Element {
    const { open } = this.state;

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={this.onClose}
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
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={() => this.onClose()}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <div className="border-b border-gray-200">
                      <div className="px-6">
                        <nav className="-mb-px flex space-x-6" x-descriptions="Tab component">
                          {tabs.map((tab) => (
                            <a
                              key={tab.name}
                              href={tab.href}
                              className={classNames(
                                tab.current
                                  ? 'border-indigo-500 text-indigo-600'
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                              )}
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div> */}
                    <ul className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                      <li>
                        <div className="relative group py-6 px-5 flex items-center">
                          <button
                            type="button"
                            className="-m-1 flex-1 block p-1"
                          >
                            <div
                              className="absolute inset-0 group-hover:bg-gray-50"
                              aria-hidden="true"
                            />
                            <div className="flex-1 flex items-center min-w-0 relative">
                              <span className="flex-shrink-0 inline-block relative">
                                {/* <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" /> */}
                                <span
                                  className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"
                                  aria-hidden="true"
                                />
                              </span>
                              <div className="ml-4 truncate">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  Nick
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  Count
                                </p>
                              </div>
                            </div>
                          </button>
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
