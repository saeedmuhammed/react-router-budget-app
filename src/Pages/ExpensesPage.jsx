import React from 'react'
import { fetchData } from '../Helper'
import { useLoaderData } from 'react-router-dom';
import ExpensesTable from '../Components/ExpensesTable';

export default function ExpensesPage() {
  const {expenses} = useLoaderData();
  return (
    
    <div className="grid-lg">
    <h1>All Expenses</h1>
    {expenses && expenses.length > 0 ? 
      <div className="grid-mid">
        <h2>Recent Expenses <small>({expenses.length} total ) </small> </h2>
        <ExpensesTable expenses={expenses} />
      </div>
    : <p> No Expenses to show </p>}
    
    </div>
   
    
  )
}




export function expensesPageLoader () {

  const expenses = fetchData("expenses");
  return {expenses}

}