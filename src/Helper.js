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