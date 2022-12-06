import React from "react";
import "./restaurant.css";
import fs from 'fs'

export default class Restaurant extends React.Component {
  handleClick = () => {
    let menus = document.getElementById('menus')
    let counter = 1
    while (true) {
      let path = process.env.PUBLIC_URL +
        this.props.restaurant.menu + '/food' + counter++ + '.avif'
      if (fs.existsSync(path))
        menus.appendChild(document.createElement('img')).src = path
      else break
    }
  }

  render = () => <>
    <div className="restaurant">
      <button onClick={this.handleClick}><h3>{this.props.restaurant.name}</h3></button>
      <address>{this.props.restaurant.address}</address>
      <p>[{this.props.restaurant.cuisines.join(', ')}]</p>
    </div>
    <div id="menus" className="menus"></div>
  </>
}