import React from "react"
import Cart from "../cart/cart"
import Items from "../items/items"
import './shopping-container.css'

export default class ShoppingContainer extends React.Component {
  state = {
    cartItems: []
  }

  render = () => <div className="container">
    <div className="header">
      Please select your Item from the Items given Below
    </div>
    <Items handleCart={this.handleCart} />
    <Cart cartItems={this.state.cartItems} />
  </div>

  handleCart = (item) => {
    let cartItems = this.state.cartItems
    cartItems.push(item)
    this.setState({ cartItems: cartItems })
  }
}