import { useState } from 'react'
import Button from '../../components/Button/button.component'
import './login.form.style.scss'

import logo from '../../assets/lendsqr_logo1.png'
import logoImage from '../../assets/pablo-sign-in.png'

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
      <div className='login-body-container'>
        <div className='left-half'>
          <img className='logo' src={logo} alt='logo' />
          <img className='img-logo' src={logoImage} alt='logo animation' />
        </div>

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
    </div>
  )
}

export default Login
