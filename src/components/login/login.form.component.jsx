import { useState } from 'react'
import Button from '../Button/button.component'
import './login.form.style.scss'

const Login = () => {
  //   const [formFields, setFormFields] = useState(defaultFormFields)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    alert('Successfully submitted')
  }

  const onChangeHandler = e => {
    setPassword(e.target.value)
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='login-container'>
      <div className='left-half'></div>

      <div className='right-half'>
        <h2> Welcome!</h2>
        <p>Enter details to login.</p>
        <form>
          <input type='text' placeholder='Email' name='email' />
          <div className='passwordField'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              onChange={onChangeHandler}
            />
            <span className='password-cta' onClick={toggleShowPassword}>
              Show
            </span>
          </div>
          <span>Forgot password?</span>
          <Button children={`Log in`} onSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  )
}

export default Login
