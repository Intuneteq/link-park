import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <input type="email" placeholder='email' />
        <input type="text" placeholder='password' />
        <Link to='/fullname/dashboard'><button>Login</button></Link>
    </div>
  )
}

export default Login;