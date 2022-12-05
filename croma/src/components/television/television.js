import React from "react";
import "./television.css";

export default class Television extends React.Component {
  render = () => <>
    <h2>{this.props.television.brand} {this.props.television.model}</h2>
    <h3>Specifications</h3>
    <dl>
      <dt><strong>Display</strong></dt><dd>{this.props.television.display}</dd>
      <dt><strong>OS</strong></dt><dd>{this.props.television.os}</dd>
      <dt><strong>Sound</strong></dt><dd>{this.props.television.sound}</dd>
      <dt><strong>Features</strong></dt><dd>{this.props.television.features}</dd>
    </dl>
  </>
}