import React from 'react'
import { getAllMatches } from '../Helper';
import { Link, useFetcher } from 'react-router-dom';

export default function ExpenseItem({expense , showBudget}) {

    const budget = getAllMatches({
      category:"budgets",
      key:"id",
      value:expense.budgetId,

    })[0];

    const fetcher = useFetcher();
  return (
    
    <>
    <td>
        {expense.name}
    </td>
    <td>
        {expense.amount}
    </td>
    <td>
        {new Date(expense.createdAt).toLocaleDateString()}
    </td>
    {showBudget && (< td> <Link to={`/budget/${budget.id}`} >{budget.name}</Link> </td>)}
    < td>  
      <fetcher.Form method='post'>
        <input type='hidden' name='_action' value="deleteExpense" />
        <input type='hidden' name='expenseId' value={expense.id} />
        <button type='submit' className='btn btn--warning'>Delete</button>
      </fetcher.Form>
    </td>
    </>


  )
}

