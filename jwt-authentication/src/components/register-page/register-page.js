import React from "react";
import "./register-page.css";
import profileImage from "../../assets/profile.jpg"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button"
import { isEmail } from "validator";
import { withRouter } from "../../common/with-router";
import authenticationService from "../../services/authentication-service";

const required = value => {
  if (!value)
    return <div className="form-group" >
      <div className="alert alert-danger" role="alert">
        This field is Required!
      </div>
    </div>
}

const validateFullName = value => {
  if (value.length < 3)
    return <div className="form-group" >
      <div className="alert alert-danger" role="alert">
        The Full Name must have at least 3 characters
      </div>
    </div>
}

const validateUsername = value => {
  if (value.length < 3 || value.length > 12)
    return <div className="form-group" >
      <div className="alert alert-danger" role="alert">
        The Username must be between 3 and 12 characters
      </div>
    </div>
}

const validateEmail = value => {
  if (!isEmail(value))
    return <div className="form-group" >
      <div className="alert alert-danger" role="alert">
        Not a Valid Email id
      </div>
    </div>
}

const validatePassword = value => {
  if (value.length < 6 || value.length > 40)
    return <div className="form-group" >
      <div className="alert alert-danger" role="alert">
        The Password must be between 6 and 40 characters
      </div>
    </div>
}

class RegisterPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleFullName = this.handleFullName.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleMessage = this.props.handleMessage
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
      role: "",
      message: "",
      successful: false
    }
  }

  handleFullName = event => this.setState({ fullName: event.target.value })
  handleUsername = event => this.setState({ username: event.target.value })
  handleEmail = event => this.setState({ email: event.target.value })
  handlePassword = event => this.setState({ password: event.target.value })
  handleRole = event => this.setState({ role: event.target.value })

  handleRegister = event => {
    event.preventDefault()
    this.setState({ message: "", successful: false })
    this.form.validateAll()
    if (this.checkBtn.context._errors.length === 0) {
      let isRegistered = authenticationService.register(
        this.state.fullName,
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.role
      )
      if (isRegistered) this.handleMessage("User Successfully Created")
      else this.handleMessage("User Creation Failed")
    }
    this.props.router.navigate("/home")
  }

  render = () => <>
    <h3>Register Page</h3>
    <img src={profileImage} alt="profile-img" className="profile-img-card" />
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={this.handleRegister} ref={c => { this.form = c }}>
          {!this.state.successful && (<>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <Input type="text" className="form-control" name="fullName"
                onChange={this.handleFullName}
                validations={[required, validateFullName]} />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input type="text" className="form-control" name="username"
                onChange={this.handleUsername}
                validations={[required, validateUsername]} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input type="text" className="form-control" name="email"
                onChange={this.handleEmail}
                validations={[required, validateEmail]} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input type="password" className="form-control" name="password"
                onChange={this.handlePassword}
                validations={[required, validatePassword]} />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <Input type="radio" name="role" value="admin"
                onChange={this.handleRole} />
              <span>Admin</span>
              <Input type="radio" name="role" value="user"
                onChange={this.handleRole} />
              <span>User</span>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Signup</button>
            </div>
          </>)}
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

export default withRouter(RegisterPage)