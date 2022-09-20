import React from 'react'
import './AboutPageStyles.css'
import { Link } from 'react-router-dom'
import Agent from '../assets/agent1.jpg'
import Agent2 from '../assets/agent2.jpg'
import Agent3 from '../assets/agent3.jpg'

const AboutPage = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Agent 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, justo eget semper maximus, urna eros dictum velit, vitae aliquet orci leo sit amet nisi.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack bottom'>
                    <img src={Agent} className='img' alt='Agent 1' />
                </div>
            </div>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack bottom'>
                    <img src={Agent2} className='img' alt='Agent 2' />
                </div>
            </div>
        </div>
        <div className='left'>
            <h1>Agent 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, justo eget semper maximus, urna eros dictum velit, vitae aliquet orci leo sit amet nisi.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='left'>
            <h1>Agent 3</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, justo eget semper maximus, urna eros dictum velit, vitae aliquet orci leo sit amet nisi.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack bottom'>
                    <img src={Agent3} className='img' alt='Agent 3' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage
