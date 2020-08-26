import React, { Component } from "react";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import employees from "./utils/employees.json";
import TableHeader from "./components/TableHeader";
import EmployeeList from "./components/EmployeeList";

class App extends Component {
  state = {
    employees,
    sorted: false,
  };

  // handleToggle = () => {
  //   if (this.state.sorted) {
  //     this.props.sort("asc");
  //   } else {
  //     this.props.sort("desc");
  //   }
  //   this.setState({ sorted: !this.state.sorted });
  // };

  render() {
    return (
      <div>
        {" "}
        <Header />
        <Wrapper>
          <table className="table">
            <TableHeader />
            {this.state.employees.map((employee) => (
              <EmployeeList
                id={employee.id}
                key={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                image={employee.image}
                email={employee.email}
                phone={employee.phone}
              />
            ))}
          </table>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default App;
