import React, { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

export default function ExpenseFrom({ budgets }) {
  const fetcher = useFetcher();
  const isSubmmiting = fetcher.state === "submitting";
  const formRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (!isSubmmiting) {
      //clear from inputs
      formRef.current.reset();
      //change from focus
      inputRef.current.focus();
    }
  }, [isSubmmiting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add new{" "}
        <span className="accent">
          {budgets.length === 1 && `${budgets[0].name}`}
        </span>{" "}
        Expense
      </h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newExpense">New Expense</label>
          <input
            type="text"
            name="newExpense"
            id="newExpense"
            placeholder="e.g. , Coffee"
            required
            ref={inputRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newExpenseAmount"> Expense Amount</label>
          <input
            type="number"
            name="newExpenseAmount"
            id="newExpenseAmount"
            placeholder="e.g. , 50 $"
            required
            inputMode="decimal"
          />
        </div>

        <select
          name="newExpenseBudget"
          id="newExpenseBudget"
          required
          hidden={budgets.length === 1}
        >
          {budgets
            .sort((a, b) => a.createdAt - b.createdAt)
            .map((budget) => {
              return (
                <option key={budget.id} value={budget.id}>
                  {" "}
                  {budget.name}{" "}
                </option>
              );
            })}
        </select>

        <input type="hidden" name="_action" value="newExpense" />

        <button type="submit" className="btn btn--dark" disabled={isSubmmiting}>
          {isSubmmiting ? <span>Submitting</span> : <span>Add Expense</span>}
        </button>
      </fetcher.Form>
    </div>
  );
}
