import React from 'react'
import './FooterStyle.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='left'>
            <div id='list'>
              <h2>About the company</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam"
                </p>
            <div className='social'>
              <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
              <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
              <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
              <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
            </div>
            </div>
          </div>
          <div className='center'>
            <h3>
              <Link to='/'>Home</Link>
            </h3>
            <h3>
              <Link to='/about'>About</Link>
            </h3>
            <h3>
              <Link to='/pricing'>Calculator</Link>
            </h3>
            <h3>
              <Link to='/calendar'>Calendar</Link>
            </h3>
            <h3>
              <Link to='/contact'>Contact</Link>
            </h3>
            </div>
            <div className='right'>
              <div className='phone'>
                  <p><FaPhone size={20} style={{ color: '#ffffff', marginRight: '0.5rem' }} /> 1-949-979-5454</p>
              </div>
              <div id='email'>
                <p><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '0.5rem' }} />EkeloLLC@gmail.com</p>
              </div>
              <h4>Copyright © 2022 Ekelo - All Rights Reserved.</h4>
            </div>
        </div>
      </div>
  )
}

export default Footer
