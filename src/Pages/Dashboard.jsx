import React from 'react'
import { createBudget, fetchData } from '../Helper'
import { useLoaderData } from 'react-router-dom';
import Intro from '../Components/Intro';
import { toast } from 'react-toastify';
import BudgetForm from '../Components/BudgetForm';




export default function Dashboard() {
    const {userName , budgets} = useLoaderData();
  return (
    <>  
    
   {userName ? 
   <div className='dashboard'> 
    <h1>Welcome Back,<span className='accent'> {userName}</span></h1>
   <div className='grid-sm'>
    {/* {budgets ? : } */}
    <div className='grid-lg'>
      <div className='flex-lg'>
        <BudgetForm />
      </div>
    </div>
     </div>
   </div>
   : <Intro />}
    </>
  )
}



export async function dashboardAction({request}){
  const data = await request.formData();
  const {_action,...values} = Object.fromEntries(data);
  if(_action==='newUser') {
    
    try {
      localStorage.setItem("userName",JSON.stringify(values.userName));
    
      return toast.success("Hello ,"+values.userName);
        
      } catch (error) {
        throw new Error("There is something wrong while createing your account");  
      }
  }
 
  if (_action ==='newBudget') {
    try {
      createBudget({
        name: values.newBudget,
        amount : values.newBudgetAmount,
      });
      return toast.success("Budget Created");
    } catch (error) {
      throw new Error("There is a problem while creating your budget");
    }
  }
}

export function dashboardLoader(){

const userName= fetchData("userName");
const budgets = fetchData("budgets");
return {userName , budgets};

}