import React from "react";

const ExpenseFilter = (props) => {
  return (
    <div className="container mb-4 mt-4">
      <div className="row">
        <div className="col-6">
          <h4>Select year</h4>
        </div>
        <div className="col-6">
          <select
            className="form-select"
            onChange={(event) => {
              props.onYearSelect(event.target.value);
            }}
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;
