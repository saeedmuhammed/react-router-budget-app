import React from 'react'
import { calculateSpent, currencyFormat ,  percentageFromat } from '../Helper';
import { Form, Link } from 'react-router-dom';


export default function BudgetCard({budget , showDelete=false}) {
  
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
      <div className="flex-sm">
        
        {showDelete ?  
        <Form
        method='post'
        action='delete'
        onSubmit={(e)=> {
          if(!confirm("Delete the Budget !") ) {
              e.preventDefault();
          } 
        }}
        >

        <button type='submit' className='btn'>
          <span>Delete</span>
        </button>


        </Form>
        : 
        
        <Link to={`budget/${budget.id}`} className='btn' > <span>View Details</span></Link>
        }


      </div>

    </div>
  )
}
