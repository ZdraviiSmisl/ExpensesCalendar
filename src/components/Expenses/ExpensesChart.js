import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  let expenseChartPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  console.log(props.expenses);

  //for changing the fill in the chart component in relation to the passed data
  props.expenses.forEach(
    (expens) =>
      (expenseChartPoints[expens.date.getMonth()].value += expens.amount)
  );

  console.log(props.expenses);

  return <Chart dataPoints={expenseChartPoints} />;
};

export default ExpensesChart;
