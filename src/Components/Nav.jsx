import React from 'react'
import logo from '../assets/logomark.svg'
import { Form, NavLink } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div>
        <nav>
        <NavLink to='/' >
        <img src={logo} />
       <span> HomeBudget  </span>
        </NavLink>
        

            {props.userName && (
                <Form method='post' action='logout'
                onSubmit={ (e) => {if(!confirm('Delete all data ?')) {
                    e.preventDefault();
                } }}
                >
                <button className="btn btn--warning" > Delete User </button>
                
                </Form>
            )}

      
        </nav>
       

    </div>
  )
}
