import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="container">
      <div className="row">
        {expenses.length ? (
          expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
              id={expense.id}
              onDeleteExpense={(id) => {
                onDeleteExpense(id);
              }}
            />
          ))
        ) : (
          <h2>No expenses found</h2>
        )}
      </div>
    </div>
  );
};

export default Expenses;
