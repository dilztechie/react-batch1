import React, { useReducer } from "react"
import './product.css'

const products = [{
  unicode: 0X1F368,
  item: 'ice cream',
  cost: 5
}, {
  unicode: 0X1F369,
  item: 'doughnut',
  cost: 25
}, {
  unicode: 0X1F382,
  item: 'cake',
  cost: 450
}, {
  unicode: 0X1F355,
  item: 'pizza',
  cost: 725
}]

export default function Product() {

  let cartReducer = (state, action) => {
    switch (action.type) {
      case 'add': return [...state, action.product]
      case 'remove':
        const productIndex = state.findIndex(product => product.item === action.product.item)
        if (productIndex < 0) return state
        const update = [...state]
        update.splice(productIndex, 1)
        return update
      default: return state
    }
  }

  const [cart, setCart] = useReducer(cartReducer, [])

  let getCount = (cart, product) => {
    let count = 0
    cart.map(eachProduct => {
      if (eachProduct.unicode === product.unicode) ++count
    })
    return count
  }

  let add = (product) => setCart({ product, type: 'add' })

  let remove = (product) => setCart({ product, type: 'remove' })

  let getTotal = (cart) => {
    const total = cart.reduce((totalCost, product) => totalCost + product.cost, 0)
    return total.toLocaleString(
      undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  return (<div className="wrapper">
    <div>
      Shopping Cart: {cart.length} total items.
    </div>
    <div>Total Cost: {getTotal(cart)}</div>
    <div>
      {products.map(product => (<div key={product.unicode} className="product">
        <span>{String.fromCodePoint(product.unicode)}</span> &nbsp;
        <button onClick={() => add(product)}>+</button> &nbsp;
        {getCount(cart, product)} &nbsp;
        <button onClick={() => remove(product)}>-</button>
      </div>
      ))}
    </div>
  </div>)
}