import React from "react";
import "./item.css";

export default class Item extends React.Component {
  render = () => {
    let handleCart = this.props.handleCart
    let item = this.props.item
    return (<div className="item">
      <button onClick={() => handleCart(item)}>
        {String.fromCodePoint(item.unicode)}
      </button> <br />
      {item.name} <br />
      {item.price}
    </div>)
  }
}