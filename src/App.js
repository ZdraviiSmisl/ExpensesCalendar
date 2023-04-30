import ExpensesList from "./components/ExpensesList.js";

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
      <ExpensesList items={expenses} />
    </div>
  );
}

export default App;
