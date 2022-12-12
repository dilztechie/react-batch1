import React from "react";
import "./admin-profile-page.css";

export default class AdminProfilePage extends React.Component {
  render = () => <>
    <h3>Profile</h3>
    <h4>Welcome Admin, {this.props.name}</h4>
  </>
}