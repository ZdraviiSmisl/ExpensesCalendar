import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form action="" method="POST">
      <div className="new-expense__controls">
        <label className="new-expense__label">
          Title
          <input className="new-expense__input" type="text" />
        </label>
        <label className="new-expense__label">
          Amount
          <input
            className="new-expense__input"
            type="number"
            min="0.01"
            step="0.01"
          />
        </label>
        <label className="new-expense__label">
          Date
          <input
            className="new-expense__input"
            type="date"
            min="2022-01-01"
            max="2023-4-25"
          />
        </label>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
