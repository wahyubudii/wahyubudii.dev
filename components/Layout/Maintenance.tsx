import React from 'react'
import Link from 'next/link'
import Header from '../Sections/Header'
import Footer from '../Sections/Footer'
import { BsArrowLeft } from 'react-icons/bs'

export default function Maintenance() {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className="container m-auto">
        <div className="text-center grid grid-cols-2 gap-6 items-center mx-40">
          <div className='text-left'>
            <h1 className='font-bold text-5xl leading-tight'>Under Maintenance</h1>
            <p className='mt-4 mb-14'>Sorry, the page you are looking for doesnt exist or has been moved. Try again with valid url. Click button below.</p>
            <Link href="/" className='flex items-center w-fit px-6 py-3 rounded-lg border border-slate-400 hover:bg-green-500 group transition'>
                <BsArrowLeft className='group-hover:text-white' size="20" />
                <p className='ml-3 font-semibold group-hover:text-white'>Go back</p>
            </Link>
          </div>
          <p className='text-9xl bg-green-300 rounded-full py-5 font-bold'>404</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
