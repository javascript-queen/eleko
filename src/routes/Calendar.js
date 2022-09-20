import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImages from '../components/HeroImages'

const Calendar = () => {
  return (
    <div>
      <Navbar />
      <HeroImages heading='Schedule a call.' text='Check the available time.' />
      <Footer />
    </div>
  )
}

export default Calendar
