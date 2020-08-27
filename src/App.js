import React, { Component } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import employees from "./utils/employees.json";
import TableHeader from "./components/TableHeader";
import EmployeeList from "./components/EmployeeList";
import SearchForm from "./components/SearchForm";

class App extends Component {
  state = {
    employees,
    result: {},
    search: "",
  };

  // componentDidMount() {
  //   this.searchEmployee();
  // }

  // searchEmployee = (query) => {
  //   employees
  //     .search(query)
  //     .then((res) => this.setState({ result: res.data }))
  //     .catch((err) => console.log(err));
  // };

  // handleInputChange = (event) => {
  //   const value = event.target.value;
  //   const firstName = event.target.firstName;
  //   this.setState({
  //     [firstName]: value,
  //   });
  // };

  // // When the form is submitted, search the OMDB API for the value of `this.state.search`
  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   this.searchEmployee(this.state.search);
  // };

  render() {
    return (
      <div>
        {" "}
        <Header />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
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
