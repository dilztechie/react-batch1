import React from "react";
import employeeService from "../../service/employee-service";
import "./create-employee.css";

export default class CreateEmployee extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      emailId: ''
    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this)
  }

  componentDidMount = () => {
    if (this.state.id === '_add') return
    employeeService.getEmployeeById(this.state.id).then(response => {
      let employee = response.data
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId
      })
    })
  }

  getTitle = () => this.state.id === '_add' ?
    <h3 className="text-center">Add Employee</h3> :
    <h3 className="text-center">Update Employee</h3>

  changeFirstNameHandler = event => this.setState({ firstName: event.target.value })
  changeLastNameHandler = event => this.setState({ lastName: event.target.value })
  changeEmailIdHandler = event => this.setState({ emailId: event.target.value })

  render = () => <div>
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {this.getTitle}
          <div className="card body">
            <form>
              <div className="form-group">
                <label><strong>First Name: </strong></label>
                <input placeholder="first name?" name="firstName" className="form-control"
                  value={this.state.firstName} onChange={this.changeFirstNameHandler} />
              </div>
              <div className="form-group">
                <label><strong>Last Name: </strong></label>
                <input placeholder="last name?" name="lastName" className="form-control"
                  value={this.state.lastName} onChange={this.changeLastNameHandler} />
              </div>
              <div className="form-group">
                <label><strong>Email Id: </strong></label>
                <input placeholder="email id?" name="emailId" className="form-control"
                  value={this.state.emailId} onChange={this.changeEmailIdHandler} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
}