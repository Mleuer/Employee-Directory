import React, { useState, useEffect } from "react";
import EmployeeTable from "../components/employeeTable.js";
import API from "../utils/API.js";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [userInput, setUserInput] = useState("");

  function loadEmployees() {
    API.getEmployees().then((response) => {
      setEmployees(response.data.results);
    });
  }

  function handleInputChange(event) {
    event.preventDefault();

    const value = event.target.value;

    setUserInput(value);
  }

  function filterEmployees() {
    setFilteredEmployees(employees.filter((element) => element.name.last.includes(userInput)));
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <>
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Employee Directory</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              name="filter"
              value={userInput}
              onChange={handleInputChange}
              onBlur={filterEmployees}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <EmployeeTable employees={employees} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
