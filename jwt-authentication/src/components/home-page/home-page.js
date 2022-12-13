import React from "react";
import { withRouter } from "../../common/with-router";
import "./home-page.css";

class HomePage extends React.Component {
  state = { body: "" }

  constructor(props) {
    super(props)
    if (localStorage.getItem("user") === null) {
      this.state.body = <>
        <p>Existing Users: Click <a href="/login">here</a> to Login</p>
        <p>New Users: Click <a href="/register">here</a> to Register</p>
        <p>{
          localStorage.getItem("isRegistered") === null ? "" :
            localStorage.getItem("isRegistered") ?
              "User Created Successfully" :
              "User Creation Failed"
        }</p>
      </>
    }
  }

  render = () => <>
    <h3>Home Page</h3>
    {this.state.body}
  </>
}

export default withRouter(HomePage)