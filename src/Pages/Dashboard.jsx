import React from 'react'
import { fetchData } from '../Helper'
import { useLoaderData } from 'react-router-dom';




export default function Dashboard() {
    const userName = useLoaderData();
  return (
    <>  
    
    <div>Hello , {userName}</div>
    </>
  )
}


export function dashboardLoader(){

const userName = fetchData("userName");
return userName;

}