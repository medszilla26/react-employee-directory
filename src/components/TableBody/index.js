import React from "react";
import "./style.css";

function TableBody(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;