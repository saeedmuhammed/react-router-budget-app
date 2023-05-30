import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export  const fetchData = (key)=> {

    
return JSON.parse(localStorage.getItem(key));

}


//delete item with id 

export const deleteWithId = ({key,id}) => {

const data = fetchData(key);

const newData = data.filter((item)=> item.id != id);

return localStorage.setItem(key,JSON.stringify(newData));

}

export const deleteItem = (key) => {

localStorage.removeItem(key);
localStorage.clear();
toast.success("User Deleted Succefully !");
return redirect("/");
}


//create budget 
export const createBudget=({name,amount})=>{
    const budget = {
        id:Math.floor(Date.now() + Math.random()* 100 + 1), //add date now to generate unique ID
        name : name,
        createdAt : Date.now(),
        amount : +amount,

    }
    const existingBudgets = fetchData('budgets') ?? [];

    return localStorage.setItem('budgets',JSON.stringify([...existingBudgets,budget]));
}

//create expense
export const createExpense = ({name , amount , budgetId}) => {


    const spent = calculateSpent(budgetId);
    const budgetAmount = getAllMatches({
        category:"budgets",
        key:"id",
        value:budgetId
    })[0].amount;
    const remain = budgetAmount - spent ;
    if(amount > remain) {

        return false ;
        // toast.warning("You have no enoguh budget" , {autoClose:1500});
    }
    else {
        const expense = {
            id:Math.floor(Date.now() + Math.random()* 100 + 1), //add date now to generate unique ID
            name : name ,
            createdAt : Date.now(),
            amount : +amount,
            budgetId : budgetId,
        }
    
        const existingExpenses = fetchData('expenses') ?? [];
        localStorage.setItem('expenses',JSON.stringify([...existingExpenses , expense]));
        return true;
    
    }
    
}


//get all matches 

export const getAllMatches = ({
    category,
    key,
    value,
}) => {

const data = fetchData(category) ?? [];

return data.filter((item)=> item[key] == value);


}



//calculate the spent value

export const calculateSpent = (budgetId) => {

    const expenses = fetchData("expenses") ?? [];
    const totalSpent = expenses.reduce((acc , expense)=> {
          
        if (expense.budgetId != budgetId){  return acc ; }
        
        return acc += expense.amount;

    } , 0);

    
    return totalSpent;

}


//Formatting 


// Formating percentages
export const percentageFromat = (value) => {
    return value.toLocaleString(undefined, {
      style: "percent",
      minimumFractionDigits: 0,
    })
  }
  


//format currency 
export const currencyFormat = (value)=> {

    return value.toLocaleString(undefined , {
        style:"currency",
        currency:"EGP"
    })

}













