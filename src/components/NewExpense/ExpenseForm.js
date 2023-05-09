import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /*There are two aprouches for updating the state: first -slices for ehach part of state separatly,second -through an object in with we store all parts of state. Both  ot these approaches occure in various projects  */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle,
  //   enteredAmount,
  //   enteredDate,
  // });

  //Using a second way we have to pass old state for the rest parts in each handler or we lost them becouse after changing the  specified part of state others will be replace by nothing
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    /* There is third case:WHen we deend on previous state(we are planing to update state multiple times.For instance -counter).More over React doesn't plan state instantly and it couse problem when we would be depend on  outdated or incorect state */
    //third approach
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChageHangler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChageHangler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //We create an object with the data wich geather from all inputs and the submmit it to the server
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //pass data from date inpout to newDate() instence for converting the date string to the date object
    };
    props.onAddExpenseDate(expenseData);
    //And of cource after submiting all the necessary information needs to be cleared
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <label className="new-expense__label">
          Title
          <input
            className="new-expense__input"
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </label>
        <label className="new-expense__label">
          Amount
          <input
            className="new-expense__input"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChageHangler}
            value={enteredAmount}
          />
        </label>
        <label className="new-expense__label">
          Date
          <input
            className="new-expense__input"
            type="date"
            min="2022-01-01"
            max="2023-4-25"
            onChange={dateChageHangler}
            value={enteredDate}
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
