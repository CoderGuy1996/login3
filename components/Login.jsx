import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='container'>
    <div className='login'>
      <h1>LogIn</h1>
      <input type="email" placeholder='Enter Your Email' />
      <input type="password" placeholder='Enter Your Password' />
      <div className='Button' >Login</div>
      <div>or</div>
      <div className='button'>Regester</div>
    </div>
    </div>
  )
}

export default Login
