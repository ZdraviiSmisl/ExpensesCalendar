import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

/**
 * This component creates for unloading "Epensese componen".all logic concerns the rendering of the expenditure list  including already filtered list moved to here
 * Moreover, this uses the conditional return statements
 *
 */

const ExpensesList = (props) => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
