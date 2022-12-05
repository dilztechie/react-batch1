import React from "react";
import "./mobile.css";

export default class Mobile extends React.Component {
  render = () => <>
    <h2>{this.props.mobile.brand} {this.props.mobile.model}</h2>
    <h3>Specifications</h3>
    <dl>
      <dt><strong>Display</strong></dt><dd>{this.props.mobile.display}</dd>
      <dt><strong>Memory</strong></dt><dd>{this.props.mobile.memory}</dd>
      <dt><strong>Processor</strong></dt><dd>{this.props.mobile.processor}</dd>
      <dt><strong>Camera</strong></dt><dd>{this.props.mobile.camera}</dd>
      <dt><strong>Battery</strong></dt><dd>{this.props.mobile.battery}</dd>
    </dl>
  </>
}