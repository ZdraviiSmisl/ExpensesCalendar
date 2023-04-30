import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate.js";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <span className="expense-item__price">${props.amount}</span>
      </div>
    </Card>
  );
}

export default ExpenseItem;
