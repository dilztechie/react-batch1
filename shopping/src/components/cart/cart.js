import React from "react";
import "./cart.css";

export default class Cart extends React.Component {
  render = () => <div className="cart">
    <strong>Items</strong>&nbsp;[&nbsp;
    {this.props.cartItems.map(item => <>[{item.name}: {item.cost}]</>)}
    &nbsp;]&nbsp;
    Total Cost: {this.totalCost()} &nbsp;
    Amount in Words: {this.amountInWords()}
  </div>

  totalCost = () => {
    let sum = 0
    this.props.cartItems.map(item => sum += item.cost)
    return sum
  }

  amountInWords = () => { }
}