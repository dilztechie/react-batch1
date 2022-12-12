import React from "react";
import "./login-page.css";
import profileImage from '../../assets/profile.jpg'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { withRouter } from "../../common/with-router";
import AuthenticationService from "../../services/authentication-service";

const required = value => {
  if (!value)
    return <div className="form-group" >
      <div className="alert alert-danger" role="alert">
        This field is Required!
      </div>
    </div>
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleName = this.props.handleName
    this.state = {
      username: "",
      password: "",
      message: "",
      loading: false
    }
  }

  handleUsername = event => this.setState({ username: event.target.value })
  handlePassword = event => this.setState({ password: event.target.value })

  handleLogin = event => {
    event.preventDefault()
    this.setState({ message: "", loading: true })
    this.form.validateAll()
    if (this.checkBtn.context._errors.length === 0) {
      let data = AuthenticationService.login(this.state.username, this.state.password)
      if (data !== null) {
        this.handleName(data.user.name)
        this.props.router.navigate("/profile/" + data.user.role)
      } else
        this.setState({ loading: false, message: "User not Found" })
    }
  }

  render = () => <>
    <h3>Login Page</h3>
    <img src={profileImage} alt="profile-img" className="profile-img-card" />
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={this.handleLogin} ref={c => { this.form = c }}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input type="text" className="form-control" name="username"
              onChange={this.handleUsername} validations={[required]} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input type="password" className="form-control" name="password"
              onChange={this.handlePassword} validations={[required]} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={this.state.loading}>
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          {this.state.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c }} />
        </Form>
      </div>
    </div>
  </>
}

export default withRouter(LoginPage)