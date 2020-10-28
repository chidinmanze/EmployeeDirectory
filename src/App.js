import React from "react";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees";
import 'bootstrap/dist/css/bootstrap.min.css';
import employees from "./employees.json";


function App() {
  return (
    <Wrapper>
      <h1>Employee Directory</h1>
    <Employees
    employees ={employees}
   
    />

    </Wrapper>
  );
}


export default App;
