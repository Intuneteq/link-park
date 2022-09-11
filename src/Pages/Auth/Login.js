import React from 'react'
import { Link } from 'react-router-dom';
import { Images } from '../../Constants';

import './Auth.scss';

const Login = () => {
  return (
    <div className='main'>
       <div className='nav'>
        <img src={Images.logo} alt=''/>
        <div>
          <q>Education is what remains after <br></br> one has forgotten everything he <br></br> learned in school. – Albert Einstein</q>
        </div>
      </div>
      <div className='body'>
        <form>
          <h1>Welcome back!</h1>
          <p>Please login to your account.</p>
          <div className='email'>
            <input type="email" placeholder='Email' /> <br/>
            <br/>
            <input type="text" placeholder='Password' /> <br/>
          </div>
          <div className='remember'>
            <span><input type="checkbox"></input> Remember me</span> <br/>
            <p>Forgot password?</p>
          </div>
          <Link to='/fullname/dashboard'><button className='btn-primary'>Login</button></Link>
        </form>
        <section>
          <img src={Images.reading} alt=''/>
        </section>
      </div>
      <div className='foot'>
        <span>Don't have an account yet? <Link to="/selectschool">Create a Link Park account</Link></span>
        <p>Got Questions? +2349020551592</p>
      </div>
    </div>
  )
}

export default Login;