import React from "react";
import "./home-page.css";

export default class HomePage extends React.Component {
  render = () => <>
    <h3>Home Page</h3>
    <p>Existing Users: Click <a href="/login">here</a> to Login</p>
    <p>New Users: Click <a href="/register">here</a> to Register</p>
  </>
}