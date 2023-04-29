import ExpenseItem from "./components/ExpenseItem.js";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
