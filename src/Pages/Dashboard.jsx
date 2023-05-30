import React from "react";
import { createBudget, createExpense, deleteWithId, fetchData } from "../Helper";
import { Link, useLoaderData } from "react-router-dom";
import Intro from "../Components/Intro";
import { toast } from "react-toastify";
import BudgetForm from "../Components/BudgetForm";
import ExpenseFrom from "../Components/ExpenseFrom";
import BudgetCard from "../Components/BudgetCard";
import ExpensesTable from "../Components/ExpensesTable";


export default function Dashboard() {
  const { userName, budgets , expenses } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome Back,<span className="accent"> {userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <BudgetForm />
                  <ExpenseFrom budgets={budgets} />
                </div>
                <h2>Existing Budgets</h2>
                <div className="budgets">
                  {
                    budgets.map((budget)=> 
                      <BudgetCard key={budget.id} budget={budget} />
                    )
                  }
                </div>
                  
                  {
                    expenses && expenses.length > 0 && (
                      <div className="grid-md">
                        <h2>Recent Expenses</h2>
                        <ExpensesTable expenses={expenses.sort((a,b)=>b.createAt - a.createAt).slice(0,8)} />
                        {expenses.length > 8 && (
                          <Link to="expensesPage" className="btn btn--dark" > Show All Expenses </Link>
                        )}
                      </div>
                    )
                  }
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgeting is the secret to financial freedom.</p>
                <p>Create a budget to get started!</p>
                <BudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));

      return toast.success("Hello ," + values.userName);
    } catch (error) {
      throw new Error("There is something wrong while createing your account");
    }
  }

  if (_action === "newBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget Created");
    } catch (error) {
      throw new Error("There is a problem while creating your budget");
    }
  }
  if (_action === "newExpense") {
    try {

      createExpense({
        name: values.newExpense ,
        amount: values.newExpenseAmount,
        budgetId:values.newExpenseBudget ,
      });
      return toast.success(`Expense ${values.newExpense} Created`);
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
      return toast.success(`Expense deleted`);
    } catch (error) {
      throw new Error("There is a problem while deleting the expense");
    }
  }
}

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets , expenses };
}
