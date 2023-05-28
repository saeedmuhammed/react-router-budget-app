import React from 'react'
import { fetchData } from '../Helper'
import { useLoaderData } from 'react-router-dom';
import Intro from '../Components/Intro';
import { toast } from 'react-toastify';




export default function Dashboard() {
    const userName = useLoaderData();
  return (
    <>  
    
   {userName ? userName : <Intro />}
    </>
  )
}



export async function dashboardAction({request}){
  
  try {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  localStorage.setItem("userName",JSON.stringify(formData.userName));

  return toast.success("Hello ,"+formData.userName);
    
  } catch (error) {
    throw Error("There is something wrong while createing your account");  
  }

}

export function dashboardLoader(){

const userName = fetchData("userName");
return userName;

}