import React from 'react'

import Navbar from '../components/Navbar'
import HeroImages from '../components/HeroImages'
import Footer from '../components/Footer'
import Calculator from '../components/Calculator'

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImages heading='Pricing.' text='Calculate the costs here.' />
      <Calculator/ >
      <Footer />
    </div>
  )
}

export default Pricing
