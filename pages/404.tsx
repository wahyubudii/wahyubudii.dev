import React from 'react'
import Link from 'next/link'
import Header from '../components/Sections/Header'
import Footer from '../components/Sections/Footer'
import { BsArrowLeft } from 'react-icons/bs'

export default function Custom404() {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className="container m-auto">
        <div className="flex flex-col items-center justify-center">
          <div className='rounded-full text-9xl font-semibold px-24 py-5'>404</div>
          <p className='bg-red-200 rounded-full font-semibold px-7 py-3 mb-16'>Sorry, the page you are looking for doesnt exist or has been moved. Click this link</p>
          <Link href="/" className='flex items-center w-fit px-6 py-3 rounded-lg border border-slate-400 hover:bg-green-500 group ease-in-out transition'>
            <BsArrowLeft className='group-hover:text-white' size="20" />
            <p className='ml-3 font-semibold group-hover:text-white'>Go back</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
