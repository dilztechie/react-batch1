import React from "react";
import './product.css'

export default class Product extends React.Component {
  state = {
    cart: [],
    total: 0
  }

  foods = [{
    unicode: 0X1F35E,
    name: 'bread'
  }, {
    unicode: 0X1F950,
    name: 'croissant'
  }, {
    unicode: 0X1F96F,
    name: 'bagel'
  }, {
    unicode: 0X1F95E,
    name: 'pancake'
  }, {
    unicode: 0X1F9C7,
    name: 'waffle'
  }, {
    unicode: 0X1F9C0,
    name: 'cheese wedge'
  }, {
    unicode: 0X1F354,
    name: 'hamburger'
  }, {
    unicode: 0X1F35F,
    name: 'french fries'
  }, {
    unicode: 0X1F355,
    name: 'pizza'
  }]

  render = () => <div className="wrapper">
    <div>
      Shopping Cart: {this.state.cart.length} total items. <br />
      {this.state.cart.length > 0 ?
        <>Items: {this.state.cart.join(', ')}</> :
        <></>}
    </div>
    <div>Total: {this.getTotal()}</div>
    <div>
      {this.foods.map(food => (
        <div key={food.unicode}>
          <span>{String.fromCodePoint(food.unicode)}</span>
        </div>
      ))}
    </div>
  </div>

  add = () => {

  }

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  getTotal = () => {
    this.state.total.toLocaleString(undefined, this.currencyOptions)
  }
}