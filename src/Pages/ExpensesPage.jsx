import React from 'react'
import { deleteWithId, fetchData } from '../Helper'
import { useLoaderData } from 'react-router-dom';
import ExpensesTable from '../Components/ExpensesTable';
import { toast } from 'react-toastify';

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

export async function expesnsePageAction({request}){

  const data = await request.formData();
  const{ _action , ...values }=Object.fromEntries(data);
  if (_action === "deleteExpense") {
    try {

      deleteWithId({
        key:"expenses",
        id:values.expenseId,
      });
      return toast.success(`Expense deleted`,{ autoClose: 800 });
    } catch (error) {
      throw new Error("There is a problem while deleting the expense");
    }
  }

}


export function expensesPageLoader () {

  const expenses = fetchData("expenses",{ autoClose: 800 });
  return {expenses}

}