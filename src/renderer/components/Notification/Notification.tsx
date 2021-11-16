import React, { Fragment, PureComponent } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

type Props = {
  notification?: string;
};

type State = {
  show: boolean;
};

export default class Notification extends PureComponent<Props, State> {
  state: State = {
    show: true,
  };

  public onClose = () => {
    this.setState({ show: false });
  };

  render(): JSX.Element {
    const { show } = this.state;
    const { notification } = this.props;

    return (
      <Transition
        show={show}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="p-4">
            <div className="flex items-center">
              <div className="w-0 flex-1 flex justify-between">
                <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                  {notification}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  type="button"
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={() => this.setState({ show: false })}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    );
  }
}
