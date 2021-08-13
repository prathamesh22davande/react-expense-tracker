import React from "react";

const ExpenseItem = (props) => {
  return (
    <div className=" col col-xs-12 col-md-6 col-lg-4 ">
      <div className="card card-body mb-4 border-2 border-secondary">
        <div className="card-subtitle text-secondary">
          {props.date.toString()}
        </div>
        <div className="card-body">
          <h4>{props.title}</h4>
          <h4 className="text-dark p-2 fw-bolder">$ {props.amount}</h4>
        </div>
        <button
          className="btn btn-danger ms-4 me-4 fw-bold"
          onClick={() => {
            props.onDeleteExpense(props.id);
          }}
        >
          Delete Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
