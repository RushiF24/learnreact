import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // })

  // const titleChangeHandler = (event) => {
  //   // setTitle(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     title: event.target.value
  //   })
  // };
  // const amountChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     amount: event.target.value
  //   })
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     date: event.target.value
  //   })
  // };

  const inputChangeHandler = (identifier, val) => {
    if (identifier === "title") {
      setTitle(val);
    } else if (identifier === "amount") {
      setAmount(val);
    } else {
      setDate(val);
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: date,
    };
    props.onSaveExpenseHandler(expenseData)
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-10-01"
            value={date}
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
