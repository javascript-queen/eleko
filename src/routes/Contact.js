import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'
import HeroImages from '../components/HeroImages'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImages heading='Contact us.'  />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
