import React from 'react';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer app__flex-2'>
        <div className='footer__logo'>
            <h3>Link-Park</h3>
        </div>
        <ul className='footer__links app__flex'>
            <li>Blog</li>
            <li>Privacy</li>
            <li>Terms of service</li>
            <li>HelpFAQ</li>
            <li>Contact us</li>
            <li>Links</li>
        </ul>
        <div className='footer__socials app__flex'>
            <FaTwitter />
            <FaFacebookF />
            <RiInstagramFill />
        </div>
    </div>
  )
}

export default Footer