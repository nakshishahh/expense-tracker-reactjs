import React , {useState} from "react";
import "./Expense.css";

export const ExpenseForm = (props) =>{
    const[enteredTitle,setEnteredTitle] = useState("");
    const[enteredNumber,setEnteredNumber] = useState("");
    const[entereddate,setEnteredDate] = useState("");
    const titlechangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };
    const numberchangeHandler = (event) =>{
        setEnteredNumber(event.target.value);
    };
    const datechangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };
    const submitHandler =(event) =>{
        event.preventDefault();

        const expenseData ={
            title:enteredTitle,
            amount:+enteredNumber,
            date:new Date(entereddate)

        };
       props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredNumber("");
        setEnteredDate("");

    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                   <label>Title</label>
                   <input type = "text" value={enteredTitle} onChange={titlechangeHandler} />
                </div>
                <div className="new-expense__control">
                   <label>Amount</label>
                   <input type = "number" value={enteredNumber} onChange={numberchangeHandler} min="0.01" step="0.01"  />
                </div>
                <div className="new-expense__control">
                   <label>Date</label>
                   <input type = "date" value={entereddate} onChange={datechangeHandler} min="2023-01-01" max="2025-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="submit" onClick={props.onCancel} >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
  
};