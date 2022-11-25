import React from "react";
import "./cart.css";

export default class Cart extends React.Component {
  render = () => {
    let handleDelete = this.props.handleDelete
    return (<div className="cart">
      <strong>Items</strong>&nbsp;[&nbsp;
      {this.props.cartItems.map(item => <>
        [{item.name}: {item.price}
        <button className="btnRemove" onClick={() => handleDelete(item)}>
          Remove
        </button>
        ]
      </>)}
      &nbsp;]&nbsp;
      Total Cost: {this.totalCost()}<br />
      Amount in Words: Rupees {this.amountInWords()}
    </div>)
  }

  totalCost = () => {
    let sum = 0
    this.props.cartItems.map(item => sum += item.price)
    return sum
  }

  amountInWords = () => { }
}