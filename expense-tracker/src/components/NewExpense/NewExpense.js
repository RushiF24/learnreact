import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseHandler = (newExpenseData) => {
        console.log("in new expenses");
        const expenseData = {
            ...newExpenseData,
            id: Math.random()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseHandler={saveExpenseHandler} />        
        </div>
    )
}

export default NewExpense