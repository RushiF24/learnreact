import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [show, setShow] = useState(false)

    const saveExpenseHandler = (newExpenseData) => {       const expenseData = {
            ...newExpenseData,
            id: Math.random()
        }
        props.onAddExpense(expenseData)
    }
    const showHandler = () => {
        setShow(!show)
    }

    return (
        <div className="new-expense">
            {!show && <button onClick={showHandler}>Add New Expense</button>}
            {show && <ExpenseForm onSaveExpenseHandler={saveExpenseHandler} onShowHandler={showHandler}/>}        
        </div>
    )
}

export default NewExpense