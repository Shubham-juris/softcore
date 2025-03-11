import React from 'react'

import './App.css'
import Navbar from './Comonents/Navbar/Navbar'
import Social from './Comonents/Social/Social'
import Hero from './Comonents/Hero/Hero'
import AboutUs from './Comonents/AboutUS/AboutUs'
import Footer from './Comonents/Footer/Footer'
import Sitemaintenance from './Comonents/Page/page'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs/>
      <Social/>
      <Footer/>
      <Sitemaintenance/>
    </>
  )
}

export default App
