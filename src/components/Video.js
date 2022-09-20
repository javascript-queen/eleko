import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import estateVideo from '../assets/video.mp4'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={ estateVideo } type='video/mp4' />
      </video>
      <div className='content'>
          <h1>Your choice. Our work.</h1>
          <p>We have the newest tech.</p>
        <div>
          <Link to='/pricing' className='btn btn-light'>Select a bundle</Link>
          <Link to='/calendar' className='btn btn-light'>Plan a call</Link>
        </div>
      </div>
    </div>
  )
}

export default Video
