import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const addNewEpenseDateHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: String(Date.now()).slice(-10),
    };
    props.onAddExpense(newExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenseDate={addNewEpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
