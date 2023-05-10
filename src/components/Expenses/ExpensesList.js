import React, { useState } from "react";
import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../Expenses/ExpensesFilter";

const ExpensesList = (props) => {
  const [year, setYear] = useState("2020");
  const filteredByYear = props.items.filter(
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
        {/* {props.items.filter(
          (expense) =>
            // console.log(expense.date.getFullYear())
            expense.date.getFullYear() === year
        )} */}
        {filteredByYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpensesList;
