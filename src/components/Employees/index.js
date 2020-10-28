import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Employees(props) {

  const { employees } = props;
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Employee ID</th> 
      <th scope="col">First Name</th> 
      <th scope="col">Last Name</th>
      <th scope="col">Role</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
   
  {employees.map(employee => (
    <tr>
      <td>{employee.id}</td> 
      <td>{employee.firstname}</td> 
      <td>{employee.lastname}</td> 
      <td>{employee.role}</td> 
      <td>{employee.email}</td> 
      <td>{employee.phone}</td> 
    </tr>
  ))}
  </tbody>
</table>
  );
}

export default Employees;
