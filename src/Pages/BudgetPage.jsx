import React from 'react'
import { createExpense, deleteWithId, getAllMatches } from '../Helper'
import { useLoaderData } from 'react-router-dom';
import BudgetCard from '../Components/BudgetCard';
import ExpenseFrom from '../Components/ExpenseFrom';
import ExpensesTable from '../Components/ExpensesTable';
import { toast } from 'react-toastify';

export default function BudgetPage() {
 const {budget ,expenses} = useLoaderData();
    return (
    <div className="grid-lg">
        <h1 className="h2">
            <span className="accent">
                {budget.name}
            </span> Overview
        </h1>
        <div className="flex-lg">
            <BudgetCard budget={budget} showDelete={true} />
            <ExpenseFrom budgets={[budget]} />
        </div>

        {expenses && expenses.length > 0 && (
            
            <div className="grid-md">
            
                <h2>
                    <span className="accent">
                        {budget.name}
                    </span> Expenses
                </h2>
                <ExpensesTable expenses={expenses} showBudget={false}/>
            </div>
        )}

    </div>
  )
}

export async function budgetPageAction({request}) {

    const data = await request.formData();
    const {_action , ...values} = Object.fromEntries(data);


    if (_action === "newExpense") {
        try {
    
          createExpense({
            name: values.newExpense ,
            amount: values.newExpenseAmount,
            budgetId:values.newExpenseBudget ,
          });
          return toast.success(`Expense ${values.newExpense} Created` ,{ autoClose: 800 });
        } catch (error) {
          throw new Error("There is a problem while creating the expense");
        }
      }
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


export async function budgetPagetLoader({params}){

    const budget = await getAllMatches({
        category:"budgets",
        key:"id",
        value:params.id,
    })[0];


    const expenses = await getAllMatches({
        category:"expenses",
        key:"budgetId",
        value:params.id,
    });

    return {budget , expenses};

}