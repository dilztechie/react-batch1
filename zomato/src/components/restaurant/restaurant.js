import React from "react";
import "./restaurant.css";

export default class Restaurant extends React.Component {
  render = () => <>
    <h3>{this.props.restaurant.name}</h3>
    <strong>{this.props.restaurant.address}</strong>
  </>
}