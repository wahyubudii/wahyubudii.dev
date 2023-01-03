import React from 'react'
import Link from 'next/link'
import Footer from '../components/Sections/Footer'
import { BsArrowLeft } from 'react-icons/bs'
import { MetaProps } from '../types'
import { NextSeo } from 'next-seo'

export default function Custom404() {
  const meta: MetaProps = {
    title: "Page Not Found!",
    description: "The personal site, writing and portfolio of Wahyu Budi Utomo, a frontend engineer based in Indonesia.",
    favicon: "/images/logo.png",
    type: "website"
  }

  return (
    <div className='h-screen bg-white dark:bg-black flex flex-col'>
      <NextSeo title={meta.title} description={meta.description} canonical={meta.favicon}/>
      <div className='container m-auto'>
        <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40 2xl:mx-64">
          <p className='text-6xl lg:text-9xl text-black w-fit font-bold lg:mx-auto rounded bg-red-200 text-red-600 py-5 px-10'>400</p>
          <div className='mt-8 lg:text-center dark:text-white'>
            <p className='mb-8 rounded-full text-base text-sm sm:text-sm md:text-base 2xl:text-xl'>Sorry, the page you are looking for doesn&#39;t exist or has been moved. Try again with valid url. Click button below.</p>
            <Link href="/" className='lg:mx-auto flex items-center w-fit px-5 py-2 rounded-lg border border-slate-400 hover:bg-red-200 group transition'>
                <BsArrowLeft className='group-hover:text-black' size="18" />
                <p className='ml-3 font-semibold group-hover:text-black 2xl:text-lg'>Go back</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
