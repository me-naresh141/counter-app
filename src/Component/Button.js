import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter >= 1 ? this.state.counter - 1 : 0,
    });
  };
  reset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <>
        <h2 className="count-number">{this.state.counter}</h2>
        {/* increment button */}
        <button onClick={this.increment}>increment</button>
        {/* decrement button */}
        <button
          disabled={this.state.counter < 1 ? true : false}
          onClick={this.decrement}
        >
          decrement
        </button>
        {/* reset button */}

        <button
          disabled={this.state.counter == 0 ? true : false}
          onClick={this.reset}
        >
          reset
        </button>
      </>
    );
  }
}
export default Button;
