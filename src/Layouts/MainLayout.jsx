import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import footer from '../assets/wave.svg'
import Nav from '../Components/Nav'


export default function MainLayout() {
    const userName = useLoaderData();

  return (
    <>
    <div className="layout">
        <Nav userName = {userName}/>
    <main>
        <Outlet />

    </main>    
    <img src={footer} alt="" />   

    </div>    
    
    
    
    </>
  )
}

export function dashboardLoader(){

    const userName = fetchData("userName");
    return userName;
    
    }