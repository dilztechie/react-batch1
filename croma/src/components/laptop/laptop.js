import React from "react";
import "./laptop.css";

export default class Laptop extends React.Component {
  render = () => <>
    <h2>{this.props.laptop.brand} {this.props.laptop.model}</h2>
    <h3>Specifications</h3>
    <dl>
      <dt><strong>Processor</strong></dt><dd>{this.props.laptop.processor}</dd>
      <dt><strong>Display</strong></dt><dd>{this.props.laptop.display}</dd>
      <dt><strong>Memory</strong></dt><dd>{this.props.laptop.memory}</dd>
      <dt><strong>OS</strong></dt><dd>{this.props.laptop.os}</dd>
    </dl>
  </>
}