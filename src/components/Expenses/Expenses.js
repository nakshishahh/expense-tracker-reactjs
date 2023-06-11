import React ,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { ExpensesList } from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const[filteryear,setfilteryear]=useState("2023");
  const filterChangeHandler =(selectedYear) =>{
    setfilteryear(selectedYear);
  }
  const filteredexpenses = props.items.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteryear;
  });

  return (
    <div>
       <Card className="expenses">
        <ExpenseFilter 
        selected={filteryear} 
        onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredexpenses} />
       <ExpensesList items={filteredexpenses} />
    </Card>
    </div>
  );
}

export default Expenses;