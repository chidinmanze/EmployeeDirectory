import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Employees extends React.Component {
constructor(props) {
super(props);

  const { employees } = props;
  console.log (props, "");
  
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col"><button onClick={e => props.sortBy(e, 'id')}>
      Employee ID </button></th> 
      <th scope="col">First Name</th> 
      <th scope="col">Last Name</th>
      <th scope="col">Role</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    
  {employees.map(employee => (
    <tr key={employee.id}>
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
}

export default Employees;
