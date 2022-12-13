import React from "react";
import "./user-profile-page.css";

export default class UserProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.name = JSON.parse(localStorage.getItem("user")).name
  }

  render = () => <>
    <h3>Profile</h3>
    <h4>Welcome User, {this.name}</h4>
  </>
}