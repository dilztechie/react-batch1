import React from "react";
import data from "../../api/data";
import Employee from "../employee/employee";

export default class EmployeeList extends React.Component {
  render = () => (
    <div className="container">
      <h3>Employees</h3>
      {data.map(employee => <Employee key={employee.id} employee={employee} />)}
    </div>
  )
}