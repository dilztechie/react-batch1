import React from "react";
import "./register-page.css";
import profileImage from '../../assets/profile.jpg'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthenticationService from "../../services/authentication-service";

const required = value => {
  if (!value)
    return <div className="alert alert-danger" role="alert">
      This field is required!
    </div>
}

const validateUsername = value => {
  if (value.length < 3 || value.length > 12)
    return <div className="alert alert-danger" role="alert">
      The Username must be between 3 and 12 characters
    </div>
}

const validatePassword = value => {
  if (value.length < 6 || value > 40)
    return <div className="alert alert-danger" role="alert">
      The Password must be between 6 and 40 characters
    </div>
}

const validateEmail = value => {
  if (!isEmail(value))
    return <div className="alert alert-danger" role="alert">
      This is not a Valid Email
    </div>
}

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  state = {
    username: "",
    password: "",
    email: "",
    successful: false,
    message: ""
  }

  handleRegister = event => {
    event.preventDefault()
    this.setState({ message: "", successful: false })
    this.form.validateAll()
    if (this.checkBtn.context._errors.length === 0) {
      AuthenticationService.register(
        this.state.username, this.state.email, this.state.password
      ).then(
        response => this.setState({ message: response.data.message, successful: true }),
        error => {
          const errorMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()
          this.setState({ message: errorMessage, successful: false })
        })
    }
  }

  handleUsername = event => this.setState({ username: event.target.value })
  handlePassword = event => this.setState({ password: event.target.value })
  handleEmail = event => this.setState({ email: event.target.value })

  render = () => <>
    <h3>Register Page</h3>
    <img src={profileImage} alt="profile-img" className="profile-img-card" />
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={this.handleRegister} ref={c => { this.form = c }}>
          {!this.state.successful && (<>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input type="text" className="form-control" name="username"
                value={this.state.username} onChange={this.handleUsername}
                validations={[required, validateUsername]} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input type="text" className="form-control" name="email"
                value={this.state.email} onChange={this.handleEmail}
                validations={[required, validateEmail]} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input type="text" className="form-control" name="email"
                value={this.state.password} onChange={this.handlePassword}
                validations={[required, validatePassword]} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Signup</button>
            </div>
          </>)}
          {this.state.message && (
            <div className="form-group">
              <div
                className={
                  this.state.successful ?
                    "alert alert-success" :
                    "alert alert-danger"
                }
                role="alert">
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