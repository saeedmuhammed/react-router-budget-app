import React, { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

export default function BudgetForm() {
  const fetcher = useFetcher();  //fetcher hook from react router dom is used to know the status of the from 
  const isSubmmiting = fetcher.state === "submitting";

  const formRef = useRef();
  const inputRef= useRef();

  useEffect(() => {
    if(!isSubmmiting){
      formRef.current.reset();  //to reset the inputs of the from to make it empty
      inputRef.current.focus(); //to make the focus on the add new budget input
    }


  } , [isSubmmiting])

  return (
    <>
      <div className="form-wrapper">
        <h2 className="h3"> Create Budget</h2>
        <fetcher.Form method="post" className="grid-sm" ref={formRef}>
          <div className="grid-xs">
            <label htmlFor="newBudget"> Budget Name</label>
            <input
              type="text"
              name="newBudget"
              id="newBudget"
              placeholder="e.g. , Gorceries"
              required
              ref={inputRef}
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newBudgetAmount"> Budget Amount</label>
            <input
              type="number"
              name="newBudgetAmount"
              id="newBudgetAmount"
              placeholder="e.g. , 350 EGP"
              required
              inputMode="decimal"
            />
          </div>
             {/* this hidden input to know which from is sending a request to be able to handel it's own request in the dashboard */}
          <input type='hidden' name='_action' value='newBudget'/>

          <button type="submit" className="btn btn--dark" disabled={isSubmmiting}>
            {
              isSubmmiting? <span>Submitting</span> :<span>Create budget</span>
            }
          </button>
        </fetcher.Form>
      </div>
    </>
  );
}
