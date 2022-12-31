import React from 'react'
import ContactWhatsapp from '../components/Commons/ContactWhatsapp'
import Contacts from '../components/Sections/Contacts'
import Experiences from '../components/Sections/Experiences'
import Footer from '../components/Sections/Footer'
import Header from '../components/Sections/Header'
import Hero from '../components/Sections/Hero'
import Project from '../components/Sections/Projects'

export default function coba() {
  return (
    // use this want scroll-hide "h-screen overflow-y-scroll scrollbar-hide"
    <div className='bg-gray-50 dark:bg-black'>
      <Header />
      <Hero />
      <Experiences />
      <Project />
      <Contacts />
      <ContactWhatsapp />
      <Footer />
    </div>
  )
}
