import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="container">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
