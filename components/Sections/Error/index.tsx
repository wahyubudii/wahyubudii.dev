import React from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center gap-7 lg:gap-10'>
      <p className='text-white text-8xl md:text-9xl bg-red-500 rounded w-fit px-10 py-7 font-bold'>404</p>
      <div className='lg:mt-0 dark:text-white'>
        <p className='mb-8 text-center sm:text-sm md:text-base'>Sorry, the page you are looking for doesn&#39;t exist or has been moved. Try again with valid url. Click button below.</p>
        <Link href="/" className='flex items-center mx-auto w-fit px-5 py-2 rounded-lg border border-slate-400 hover:bg-red-500 group transition'>
            <BsArrowLeft className='group-hover:text-white' size="20" />
            <p className='ml-3 font-semibold group-hover:text-white'>Go back</p>
        </Link>
      </div>
    </div>
  )
}
