import React from 'react';
import { Images } from '../../Constants';
import { Link } from 'react-router-dom';

// import './Auth.scss;'

const SignUp = () => {
  return (
    <div className='bbb'>
      <div className='nav'>
        <img src={Images.logo} alt=''/>
        <p>Already have an account? Sign in</p>
      </div>
      <div className='b'>
        <h1>Create your Link Park account</h1>
        <input type="text" placeholder='Full Name'/> <br/>
        <input type="email" placeholder='Email'/> <br/>
        <input type="password" placeholder='Password'/> <br/>
        <input type="password" placeholder='Confirm Password' /> <br/>
        <div className='DOB'>
          <div>
            <span>Class: </span>
            <select>
              <option value="">J.S.1</option>
              <option value="">J.S.2</option>
              <option value="">J.S.3</option>
              <option value="">S.S.1</option>
              <option value="">S.S.2</option>
              <option value="">S.S.3</option>
            </select>
          </div>
          <div>
            <label for="birthday">D.O.B: </label>
            <input type="date" id="birthday" name="birthday"></input>
          </div>
        </div>
        <span>Guardian's Phone number </span>
          <br/>
          <input type="tel" /> <br/>
        <Link to='/fullname/dashboard'><button className='btn-primary'>Sign up</button></Link>
      </div>
    </div>
  )
}

export default SignUp;