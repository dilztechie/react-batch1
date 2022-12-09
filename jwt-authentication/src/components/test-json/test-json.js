import React from "react";
import "./test-json.css";

export default class TestJson extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  }

  fetchUsers = () =>
    this.setState({ isLoading: true },
      () => fetch("http://localhost:3030/users")
        .then(response => response.json())
        .then(data => this.setState({ isLoading: false, users: data }))
        .catch(console.log)
    )

  componentDidMount = () => this.fetchUsers()

  render = () => <>
    <h3>Users</h3>
    {this.state.users.map(data => <>
      <dl>
        <dt><strong>id</strong></dt>
        <dd>{data.id} </dd>
        <dt><strong>username</strong></dt>
        <dd>{data.user.username} </dd>
        <dt><strong>email</strong></dt>
        <dd>{data.user.email} </dd>
        <dt><strong>password</strong></dt>
        <dd>{data.user.password} </dd>
      </dl>
      <hr />
    </>)}
  </>
}