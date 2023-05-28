import { redirect } from "react-router-dom";

export  const fetchData = (key)=> {

    
return JSON.parse(localStorage.getItem(key));

}

export const deleteItem = (key) => {

localStorage.removeItem(key);

return redirect("/");
}