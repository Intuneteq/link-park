import React from 'react';

import './Header.scss';
import { Images } from '../../Constants';

const Header = () => {
  return (
    <div className='header app__flex-2'>
        <div className='header__content app__flex-3'>
            <h1>Simplifying <br /> <span>Education</span> for you</h1>
            <p>Bring school to you anywhere and anytime, 
               <br />using resources provided by teachers and 
               <br />permitting parents follow up.
            </p>
            <div className='app__flex'>
                <button type='button'>Get Started</button>
                <button type='button'> Find School</button>
            </div>
        </div>
        <div className='header__img'>
            <div className='header__img-blob'></div>
            <div className='header__img-img'>
                <img src={Images.headerphoto} alt="headphoto" />
            </div>
        </div>
    </div>
  )
}

export default Header