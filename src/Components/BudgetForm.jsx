import React from "react";
import { Form } from "react-router-dom";

export default function BudgetForm() {
  return (
    <>
      <div className="form-wrapper">
        <h2 className="h3"> Create Budget</h2>
        <Form method="post" className="grid-sm">
          <div className="grid-xs">
            <label htmlFor="newBudget"> Budget Name</label>
            <input
              type="text"
              name="newBudget"
              id="newBudget"
              placeholder="e.g. , Gorceries"
              required
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newBudgetAmount"> Budget Amount</label>
            <input
              type="number"
              name="newBudgetAmount"
              id="newBudgetAmount"
              placeholder="e.g. , 350$"
              required
              inputMode="decimal"
            />
          </div>
             {/* this hidden input to know which from is sending a request to be able to handel it's own request in the dashboard */}
          <input type='hidden' name='_action' value='newBudget'/>

          <button type="submit" className="btn btn--dark">
            <span>Create budget</span>
          </button>
        </Form>
      </div>
    </>
  );
}
