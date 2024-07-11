import { useState } from "react";
import Card from "../UI/Card";   
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";

const Expenses = (props) => {
  const [filteredYear, seFilteredYear] = useState("2020");

  const filterChangeHandler = (val) => {
    seFilteredYear(val);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const datapoints = [
    {
      label: 'Jan',
      value: 0
    },
    {
      label: 'Feb',
      value: 0
    },
    {
      label: 'Mar',
      value: 0
    },
    {
      label: 'April',
      value: 0
    },
    {
      label: 'May',
      value: 0
    },
    {
      label: 'Jun',
      value: 0
    },
    {
      label: 'Jul',
      value: 0
    },
    {
      label: 'Aug',
      value: 0
    },
    {
      label: 'Sep',
      value: 0
    },
    {
      label: 'Oct',
      value: 0
    },
    {
      label: 'Nov',
      value: 0
    },
    {
      label: 'Dec',
      value: 0
    }
  ]
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Chart datapoints={datapoints}/>
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
