import React from "react";

function EmployeeList(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">
          <img alt={props.name} src={props.image} />
        </th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
      </tr>
    </tbody>
  );
}

export default EmployeeList;
