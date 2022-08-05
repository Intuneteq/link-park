import React from 'react';

import './Statistics.scss';

const Statistics = () => {
  return (
    <div className='statistics'>
        <h1 className='head-text'>Your Go-to platform for all learning activities</h1>
        <div className='app__flex'>
            <div className='statistics-content app__flex'>
                <h2>250+</h2>
                <p className='p-text'>Schools are registered 
                <br />across the nation.</p>
            </div>
            <div className='statistics-content app__flex'>
                <h2>85%+</h2>
                <p className='p-text'>Increase in productivity
                <br />level of students</p>
            </div>
            <div className='statistics-content app__flex'>
                <h2>2000+</h2>
                <p className='p-text'>school students 
                <br />are registered</p>
            </div>
            <div className='statistics-content app__flex'>
                <h2>1500+</h2>
                <p>Parents endorse this
                <br />learning plaform</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics