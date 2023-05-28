import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export  const fetchData = (key)=> {

    
return JSON.parse(localStorage.getItem(key));

}

export const deleteItem = (key) => {

localStorage.removeItem(key);
toast.success("User Deleted Succefully !");
return redirect("/");
}


//create budget 
export const createBudget=({name,amount})=>{
    const budget = {
        id:Math.floor(Math.random() * 100) + 1,
        name : name,
        createdAt : Date.now(),
        amount : +amount,

    }
    const existingBudgets = fetchData('budgets') ?? [];

    return localStorage.setItem('budgets',JSON.stringify([...existingBudgets,budget]));
}