import React from "react";
import employeeService from "../../service/employee-service";
import "./list-employee.css";

export default class ListEmployee extends React.Component {

  constructor(props) {
    super(props)
    this.state = { employees: [] }
    this.addEmployee = this.addEmployee.bind(this)
    this.updateEmployee = this.updateEmployee.bind(this)
  }

  addEmployee = () => this.props.history.push('/edit-employee/_add')

  updateEmployee = id => this.props.history.push(`/edit-employee/${id}`)

  deleteEmployee = id => employeeService.deleteEmployee(id).then(response =>
    this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) }))

  componentDidMount = () => employeeService.getEmployees().then(response =>
    this.setState({ employees: response.data }))

  render = () => <div>
    <h2 className="text-center">Employees List</h2>
    <div className="row">
      <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
    </div>
    <br />
    <div className="row">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee =>
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <button className="btn btn-info"
                  onClick={() => this.updateEmployee(employee.id)}>Update</button>
                <button className="btn btn-danger" style={{ marginLeft: "10px" }}
                  onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
}