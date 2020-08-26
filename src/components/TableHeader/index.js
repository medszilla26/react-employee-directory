import React from "react";
import "./style.css";

function TableHeader(props) {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">
          <strong></strong>
        </th>
        <th scope="col">
          <strong>First </strong>
          <span
            onClick={() => props.handleToggle(props.firstName)}
            className="sort"
          >
            v
          </span>
        </th>
        <th scope="col">
          <strong>Last</strong>
        </th>
        <th scope="col">
          <strong>Email</strong>
        </th>
        <th scope="col">
          <strong>Phone</strong>
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;
