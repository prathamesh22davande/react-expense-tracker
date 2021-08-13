import { useEffect, useState } from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import Expenses from "./components/Expenses/Expenses";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Car Insurance",
  //     amount: 200.0,
  //     date: new Date(2021, 2, 20),
  //   },
  //   {
  //     id: "e2",
  //     title: "Mobile Insurance",
  //     amount: 200.0,
  //     date: new Date(2021, 2, 20),
  //   },
  //   {
  //     id: "e3",
  //     title: "Medical Checkup",
  //     amount: 200.0,
  //     date: new Date(2021, 2, 20),
  //   },
  //   {
  //     id: "e4",
  //     title: "Mobile bill",
  //     amount: 200.0,
  //     date: new Date(2021, 2, 20),
  //   },
  // ];

  const [selectedYear, setSelectedYear] = useState("2020");
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Car Insurance",
      amount: 200.0,
      date: new Date(2021, 2, 20),
    },
    {
      id: "e2",
      title: "Mobile Insurance",
      amount: 200.0,
      date: new Date(2021, 2, 20),
    },
    {
      id: "e3",
      title: "Medical Checkup",
      amount: 200.0,
      date: new Date(2022, 2, 20),
    },
    {
      id: "e4",
      title: "Mobile bill",
      amount: 200.0,
      date: new Date(2022, 2, 20),
    },
  ]);

  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
    console.log(expenses);
  };

  useEffect(() => {
    const exp1 = expenses.filter((exp) => {
      return new Date(exp.date).getFullYear().toString() === selectedYear;
    });
    console.log("useEffect called");
    setFilteredExpenses(exp1);
    console.log(exp1);
  }, [selectedYear, expenses]);

  const deleteExpenseHandler = (id) => {
    console.log(`Delete clicked ${id}`);
    const res = expenses.filter((exp) => {
      return exp.id !== id;
    });
    setExpenses(res);
  };

  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container">
          <h1 className="navbar-brand text-white">Expense Tracker</h1>
        </div>
      </nav>
      <main>
        <NewExpense onAddExpense={addExpenseHandler} />
        <hr />
        <ExpenseFilter onYearSelect={setSelectedYear} />

        <ExpensesChart expenses={filteredExpenses} />
        <Expenses
          expenses={filteredExpenses}
          onDeleteExpense={deleteExpenseHandler}
        />
      </main>
      <footer className="bg-dark">
        <div className="container p-4 ">
          <h5 className="text-light">Created by Prathamesh</h5>
        </div>
      </footer>
    </>
  );
}

export default App;
