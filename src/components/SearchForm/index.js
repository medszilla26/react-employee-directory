import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="term"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="term"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-danger mt-2 ml-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
