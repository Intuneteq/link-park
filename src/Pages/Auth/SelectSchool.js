import React from 'react';
import { Link } from 'react-router-dom';

import './Auth.scss';

const SelectSchool = ({firstName}) => {
  
  return (
    <div className='schoolSelect app__flex'>
        <h1>WELCOME TO LINK PARK</h1>
        <p>Select School:</p>
        <select>
            <option value="">Trinity Home College</option>
            <option value="">Kings International College</option>
            <option value="">Federal University Oye Ekiti</option>
            <option value="">FUTA</option>
            <option value="">U.I</option>
        </select>
        <br/>
       <div>
       <Link to="/Login"><button className='btn-primary'>Login</button></Link>         
       <Link to='/sign-up'><button className='btn-primary'>Sign up</button></Link>     
       </div>
    </div>
  )
}

export default SelectSchool;