import React from 'react'

export default function ExpenseItem({expense}) {
    console.log(expense)
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
    </>


  )
}

