import React from "react";
import "./user-profile-page.css";

export default class UserProfilePage extends React.Component {
  render = () => <>
    <h3>Profile</h3>
    <h4>Welcome User, {this.props.name}</h4>
  </>
}