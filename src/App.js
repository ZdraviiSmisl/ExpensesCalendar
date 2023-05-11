import React, { useState } from "react";
import ExpensesList from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "el1",
    title: "Toilet Paper",
    amount: 93.12,
    date: new Date(2021, 1, 23),
  },
  { id: "el2", title: "New TV", amount: 799.54, date: new Date(2022, 4, 12) },
  {
    id: "el3",
    title: "Car Insurance",
    amount: 294.33,
    date: new Date(2023, 5, 20),
  },
  {
    id: "el4",
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2023, 4, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    //Since in that case when we add new expense to our state, it depends on previous state,so we have to use a callbakc functioin for updatetig previouse stsate

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList items={expenses} />
    </div>
  );
};

export default App;
