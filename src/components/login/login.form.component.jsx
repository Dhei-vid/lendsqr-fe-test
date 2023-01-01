import React, { useState } from 'react'
import Button from '../Button/button.component'

const Login = () => {
  return (
    <div>
      <h2> Welcome!</h2>
      <p>Enter details to login.</p>
      <form>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <p>Forgot password?</p>

        <Button children={`Log in`} />
      </form>
    </div>
  )
}

export default Login
