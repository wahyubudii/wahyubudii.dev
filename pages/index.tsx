import React from 'react'
import ContactWhatsapp from '../components/Commons/ContactWhatsapp'
import Experiences from '../components/Sections/Experiences'
import Footer from '../components/Sections/Footer'
import Header from '../components/Sections/Header'
import Hero from '../components/Sections/Hero'
import Project from '../components/Sections/Projects'
import { NextSeo } from 'next-seo'
import { MetaProps } from '../types'

export default function index() {
  const meta: MetaProps = {
    title: "Wahyu Budi Utomo | Front-end Developer",
    description: "The personal site, writing and portfolio of Wahyu Budi Utomo, a frontend engineer based in Indonesia.",
    favicon: "/images/logo.png",
    type: "website"
  }
  
  return (
    // use this want scroll-hide "h-screen overflow-y-scroll scrollbar-hide"
    <div className='bg-gray-50 dark:bg-black'>
      <NextSeo title={meta.title} description={meta.description} canonical={meta.favicon}/>
      <Header />
      <Hero />
      <Experiences />
      <Project />
      <ContactWhatsapp />
      <Footer />
    </div>
  )
}
