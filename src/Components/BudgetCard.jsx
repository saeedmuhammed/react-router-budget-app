import React from 'react'
import { calculateSpent, currencyFormat ,  percentageFromat } from '../Helper';


export default function BudgetCard({budget}) {
  
    const {id , name , amount} = budget;
    const spent = calculateSpent(id);
return (
    <div className="budget">

            
        <div className="progress-text">
            <h3>{name}</h3>
            <p>
                {currencyFormat(amount)} Budgeted
            </p>
        </div>
        <progress max={amount} value={spent}> 
        {percentageFromat(spent / amount)} 
        </progress>

        <div className="progress-text">
        <small>{currencyFormat(spent)} spent</small>
        <small> {currencyFormat(amount - spent)} remaining</small>
      </div>

    </div>
  )
}
