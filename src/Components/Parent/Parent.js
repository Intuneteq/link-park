import React from 'react';

import {Images} from '../../Constants';
import './Parent.scss';

const Parent = () => {

  return (
    <div className='app__flex-4 parent'>
        <div className='parent__img'>
            <div className='parent__img-box' />
            <div className='parent__img-img'>
                <img src={Images.Rectangle} alt="alt" />
            </div>
            <div className='parent-img-parent'>
                <img src={Images.Parent} alt="alt" />
            </div>
        </div>
        <div className='parent__content'>
            <h1>Effectively <span>Track</span> your 
            <br />wards learning Process
            </h1>
            <p>With simplified medium, upload learning 
            <br />resources and track all of your students
            <br />learning process.
            </p>
            <button type='button' className='btn'>Start</button>
        </div>
    </div>
  )
}

export default Parent;