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

  function handleFilterInput(event) {
    event.preventDefault();

    const value = event.target.value;
    let filteredUsers = [];

    employees.forEach(employee => {
      if(employee.name.last === value){
          filteredUsers.push(employee);
      }
    })
    setFilteredEmployees(filteredUsers);
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
              onChange={handleFilterInput}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {filteredEmployees.length > 0 ? (
              <EmployeeTable employees={filteredEmployees} />
            ) : (
              <EmployeeTable
                employees={employees}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
