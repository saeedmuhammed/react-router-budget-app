import React from 'react'
import ExpenseItem from './ExpenseItem'


export default function ExpensesTable({expenses}) {
  return (
    
        <div className="tabl">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Budget</th>
                        <th>{" "}</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense)=>
                        <tr key={expense.id}>
                            <ExpenseItem expense={expense} />
                        </tr>
                    )}
                </tbody>
            </table>
        </div>



  )
}
