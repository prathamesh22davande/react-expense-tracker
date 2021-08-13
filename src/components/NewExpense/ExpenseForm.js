import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveExpenseData(userInput);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="form mt-4 border p-4 border-secondary border-2 mb-4"
    >
      <div className="mb-3 row">
        <label htmlFor="title" className="col-sm-2 col-form-label">
          Title
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="title"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="amount" className="col-sm-2 col-form-label">
          Amount
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            onChange={amountChangeHandler}
            className="form-control"
            value={userInput.amount}
            id="amount"
            min="0.01"
            step="0.01"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="date" className="col-sm-2 col-form-label">
          Date
        </label>
        <div className="col-sm-10">
          <input
            type="date"
            onChange={dateChangeHandler}
            className="form-control"
            value={userInput.date}
            id="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
