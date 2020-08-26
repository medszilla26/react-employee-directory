import React, { Component } from "react";
// import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./utils/employees.json";
import TableWrap from "./components/TableWrap";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
  };

  removeEmployee = (id) => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(
      (employee) => employee.id !== id
    );
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a employeeCard component for each employee object
  //   render() {
  //     return (
  //       <Wrapper>
  //         <Title>Employee List</Title>
  //         {this.state.employees.map((employee) => (
  //           <EmployeeCard
  //             id={employee.id}
  //             key={employee.id}
  //             firstName={employee.firstName}
  //             lastName={employee.lastName}
  //             image={employee.image}
  //             email={employee.email}
  //             phone={employee.phone}
  //           />
  //         ))}
  //       </Wrapper>
  //     );
  //   }
  // }

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <TableWrap>
          <TableHeader />
          {this.state.employees.map((employee) => (
            <TableBody
              id={employee.id}
              key={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              image={employee.image}
              email={employee.email}
              phone={employee.phone}
            />
          ))}
        </TableWrap>
      </Wrapper>
    );
  }
}
export default App;
