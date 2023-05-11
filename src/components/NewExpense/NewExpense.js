import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const addNewExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: String(Date.now()).slice(-10),
    };
    props.onAddExpense(expenseData);
    setOpenForm(false);
  };

  const openFormHandler = () => setOpenForm(true);
  const closeFormHandler = () => setOpenForm(false);
  return (
    <div className="new-expense">
      {!openForm && (
        <button type="button" onClick={openFormHandler}>
          And New Expense
        </button>
      )}
      {openForm && (
        <ExpenseForm
          onAddExpenseDate={addNewExpenseDateHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
