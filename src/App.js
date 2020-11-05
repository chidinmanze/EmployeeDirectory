import React from "react";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees";
import "bootstrap/dist/css/bootstrap.min.css";
import employees from "./employees.json";

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      employees: employees,
      direction: {
        id: 'asc'
      }
    }

    this.sortBy = this.sortBy.bind(this)
  }
  
  sortBy(key) {
    this.setState({
      employees: employees.sort((a, b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])

      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <h1>Employee Directory</h1>
        <Employees 
        employees={this.state.employees} 
        key={this.id}
        sortBy={this.sortBy} />
      </Wrapper>
    );
  }
}

export default App;
