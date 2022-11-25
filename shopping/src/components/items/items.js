import React from "react"
import data from "../../api/data"
import Item from "../item/item"
import "./items.css"

export default class Items extends React.Component {
  state = {
    fruits: data.fruits,
    vegetables: data.vegetables,
    bakery: data.bakery
  }

  render = () => <div className="wrapper">
    <div className="items-fruits">
      <div className="items-header">Fruits</div>
      {this.state.fruits.map(fruit =>
        <Item key={fruit.unicode} item={fruit} handleCart={this.props.handleCart} />
      )}
    </div>
    <div className="items-vegetables">
      <div className="items-header">Vegetables</div>
      {this.state.vegetables.map(vegetable =>
        <Item key={vegetable.unicode} item={vegetable} handleCart={this.props.handleCart} />
      )}
    </div>
    <div className="items-bakery">
      <div className="items-header">Bakery</div>
      {this.state.bakery.map(bread =>
        <Item key={bread.unicode} item={bread} handleCart={this.props.handleCart} />
      )}
    </div>
  </div>
}