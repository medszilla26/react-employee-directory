import React from "react";
import "./style.css";

function TableHeader() {
  return (
    <thead>
      <tr className="topBar">
        <th scope="col">
          <strong></strong>
        </th>
        <th scope="col">
          <strong>First</strong>
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
