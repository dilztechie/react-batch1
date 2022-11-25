import React from "react";
import "./item.css";

export default class Item extends React.Component {
  render = () => {
    let handleCart = this.props.handleCart
    return (<div className="item">
      <button onClick={handleCart(this.props.item)}>
        {String.fromCodePoint(this.props.item.unicode)}
      </button> <br />
      {this.props.item.name} <br />
      {this.props.item.price}
    </div>)
  }
}