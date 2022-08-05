import React from 'react';

import './Header.scss';
import { Images } from '../../Constants';

const Header = () => {
  return (
    <div className='header app__flex-2'>
        <div className='header__content app__flex-3'>
            <h1 className='head-text'>Simplifying <span>Education</span> for you</h1>
            <p className='p-text'>Bring school to you anywhere and anytime, 
               using resources provided by teachers and 
               permitting parents follow up.
            </p>
            <div className='app__flex-3'>
                <button type='button' className='btn-primary'>Get Started</button>
                <button type='button' className='btn-secondary'> Find School</button>
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