import React, { FormEvent, PureComponent } from "react";

type LoginProps = {
  onSubmit: CallableFunction;
};

export default class Login extends PureComponent<LoginProps> {
  constructor(props: LoginProps) {
    super(props);

    this.nameRef = React.createRef();
    this.tableRef = React.createRef();
  }

  public onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { onSubmit } = this.props;

    onSubmit(this.nameRef.current?.value, this.tableRef.current?.value);
  };

  public nameRef: React.RefObject<HTMLInputElement>;

  public tableRef: React.RefObject<HTMLInputElement>;

  render(): JSX.Element {
    return (
      <div className="min-w-full min-h-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              21
            </h2>
          </div>
          <form onSubmit={this.onSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Your name"
                  ref={this.nameRef}
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Table invite"
                  ref={this.tableRef}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Play
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
