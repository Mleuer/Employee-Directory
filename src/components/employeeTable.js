import React from "react";

function EmployeeTable(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Cell Phone</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => {
            console.log(employee);
            return (
              <tr key={employee.cell}>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default EmployeeTable;
