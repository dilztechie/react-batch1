import React from "react";
import "./admin-profile-page.css";

export default class AdminProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.name = JSON.parse(localStorage.getItem("user")).name
  }

  render = () => <>
    <h3>Profile</h3>
    <h4>Welcome Admin, {this.name}</h4>
  </>
}