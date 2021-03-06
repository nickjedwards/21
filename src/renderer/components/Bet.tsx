import React, { PureComponent, Fragment, createRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Context from "../context/table";

type State = {
  open: boolean;
  isValid: boolean;
};

export default class Bet extends PureComponent<Record<string, never>, State> {
  public constructor(props: Record<string, never>) {
    super(props);

    this.betRef = createRef();
    this.cancelButtonRef = createRef();
  }

  public state: State = { open: true, isValid: false };

  static contextType = Context;

  declare context: React.ContextType<typeof Context>;

  public betRef: React.RefObject<HTMLInputElement>;

  public cancelButtonRef: React.RefObject<HTMLButtonElement>;

  public render() {
    const { open, isValid } = this.state;
    const { player, onBet } = this.context;

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={this.cancelButtonRef}
          onClose={() => {}}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="sm:flex">
                  <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Place your bet
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        How much of your monees are you willing to lose? You
                        have
                        <span className="font-semibold"> ${player.purse} </span>
                        to lose.
                      </p>
                    </div>

                    <div className="mt-5 sm:flex sm:items-center">
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="bet"
                          id="bet"
                          className="focus:ring-green-500 focus:border-green-500 block w-full pl-8 sm:text-sm border-gray-300 rounded-md"
                          placeholder={String(player.purse / 4)}
                          min={1}
                          max={player.purse}
                          ref={this.betRef}
                          onInput={event => {
                            this.setState({
                              isValid: event.currentTarget.validity.valid,
                            });
                          }}
                        />
                      </div>

                      <button
                        type="button"
                        className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        disabled={!isValid}
                        onClick={() => {
                          onBet(Number(this.betRef.current?.value));
                          this.setState({ open: false });
                        }}
                      >
                        Place bet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
}
