import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import estateVideo from '../assets/video3.mp4'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={ estateVideo } type='video/mp4' />
      </video>
      <div className='content'>
          <h1>About us.</h1>
          <p>We're making real state better.</p>
        <div>
          <Link to='/pricing' className='btn btn-light'>Our prices</Link>
          <Link to='/calendar' className='btn btn-light'>Schedule a call</Link>
        </div>
      </div>
    </div>
  )
}

export default Video
