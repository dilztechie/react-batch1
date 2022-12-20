import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }

  incrementValue = () => this.setState({ value: this.state.value + 1 })
  decrementValue = () => this.setState({ value: this.state.value - 1 })

  render = () => <div className="container">
    <div className="header">
      <h3>Counter</h3>
    </div>
    <button data-testid="increment"
      onClick={() => this.incrementValue()}>+</button>
    {" "}<span data-testid="value">{this.state.value}</span>{" "}
    <button disabled={this.state.value === 0} data-testid="decrement"
      onClick={() => this.decrementValue()}>-</button>
  </div>
}