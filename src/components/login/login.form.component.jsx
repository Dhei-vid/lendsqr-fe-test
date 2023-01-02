import React, { useState } from 'react'
import Button from '../Button/button.component'
import './login.form.style.scss'

const Login = () => {
  return (
    <div className='login-container'>
      <h2> Welcome!</h2>
      <p>Enter details to login.</p>
      <form>
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Password' />
        <span>Forgot password?</span>

        <Button children={`Log in`} />
      </form>
    </div>
  )
}

export default Login
