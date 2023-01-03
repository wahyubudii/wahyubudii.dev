import React from 'react'
import Link from 'next/link'
import Footer from '../Sections/Footer'
import { BsArrowLeft } from 'react-icons/bs'

export default function Maintenance() {
  return (
    <div className='h-screen bg-white dark:bg-black flex flex-col'>
      <div className='container m-auto'>
        <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40 2xl:mx-64 2xl:mx-12 lg:grid lg:grid-cols-2 items-center">
          <p className='text-white text-6xl lg:text-9xl bg-green-500 rounded w-fit px-10 py-5 font-bold lg:mx-auto'>404</p>
          <div className='mt-12 self-center lg:mt-0 dark:text-white'>
            <h1 className='font-bold text-5xl sm:text-4xl md:text-5xl lg:text-4xl 2xl:text-5xl leading-tight'>Under Maintenance</h1>
            <p className='mt-4 mb-8 sm:text-sm md:text-base'>Sorry, the page you are looking for doesn&#39;t exist or has been moved. Try again with valid url. Click button below.</p>
            <Link href="/" className='flex items-center w-fit px-5 py-2 rounded-lg border border-slate-400 hover:bg-green-500 group transition'>
                <BsArrowLeft className='group-hover:text-white' size="20" />
                <p className='ml-3 font-semibold group-hover:text-white'>Go back</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
