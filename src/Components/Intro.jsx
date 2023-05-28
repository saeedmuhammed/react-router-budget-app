import React from 'react'
// assets
import illustration from "../assets/illustration.jpg"
import { Form } from 'react-router-dom'

export default function Intro() {
  return (
    <div className='intro'>
        <div>
            <h1>
            Take Control of <span className="accent">Your Money</span>
            </h1>
            <p>
            Personal budgeting is the secret to financial freedom. Start your journey today.
            </p>
            <Form method='post'>
                <input type="text" placeholder='What is your name ?' name='userName' required autoComplete='given-name' />
                <button type='submit' className='btn btn--dark'><span>Create Account</span></button>

            </Form>
        </div>
        <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
