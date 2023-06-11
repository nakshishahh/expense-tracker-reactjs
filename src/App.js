import React ,{useState} from 'react';

import { NewExpense } from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
const dummyexpenses = [
  // {
  //   id: 'e1',
  //   title: 'Toilet Paper',
  //   amount:0,
  //   date: new Date(),
  // },
  // { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  // {
  //   id: 'e3',
  //   title: 'Car Insurance',
  //   amount: 294.67,
  //   date: new Date(2022, 2, 28),
  // },
  // {
  //   id: 'e4',
  //   title: 'New Desk (Wooden)',
  //   amount: 450,
  //   date: new Date(2023, 5, 12),
  // },
];
const App = () => {
  const[expenses,setexpenses] = useState(dummyexpenses);
 
    const addExpenseHandler = (expense) =>{
      setexpenses((prevExpenses)=>{
        return [expense,...prevExpenses];
      });
    };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;