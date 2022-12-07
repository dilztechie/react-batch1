import React, { useState } from "react";
import "./login.css";

function loginUser(credentials) {
  return fetch('http://localhost:7080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    const token = loginUser({ username, password })
    setToken(token)
  }

  return <div className="login-wrapper">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <input placeholder="username" onChange={event => setUsername(event.target.value)} />
      <input placeholder="password" type="password" onChange={event => setPassword(event.target.value)} />
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
}