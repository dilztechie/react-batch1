import React from "react"
import './employee.css'

export default class Employee extends React.Component {
  render = () => (
    <div className="container">
      <strong>Employee details of id: {this.props.employee.id}</strong>
      name: {this.props.employee.name} <br />
      salary: {this.props.employee.salary} <br />
    </div>
  )
}