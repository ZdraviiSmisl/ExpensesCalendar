import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  const addYearExpenseHandler = (choosenYear) => {
    setYear(choosenYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onAddYearExpense={addYearExpenseHandler}
          selectedYear={year}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
