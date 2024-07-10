import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, seFilteredYear] = useState('2020')

  const filterChnageHandler = (val) => {
      seFilteredYear(val)
  }

  return (
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear}  onChangeFilter={filterChnageHandler} />
      {props.expenses.map((exp) => (
        <ExpenseItem
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        ></ExpenseItem>
        
      ))}
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      >
      </ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
