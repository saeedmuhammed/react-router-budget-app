import React from 'react'
import { deleteWithId, getAllMatches } from '../Helper';
import { redirect } from 'react-router-dom';

export default function DeleteBudget({params}) {
    try {

        deleteWithId({
            id:params.id,
            key:"budgets",
        });

        const allExpanses = getAllMatches({
            category:"expenses",
            key:"budgetId",
            value:params.id
        });
        console.log(allExpanses);
        allExpanses.map((expense)=>{
            deleteWithId({
               id:expense.id,
               key:"expenses",     
            });
        } );


        
    } catch (error) {
        throw new Error("There was a problem deleting your budget.");
    }
 
 
 
    return (
    redirect("/")
  )
}
