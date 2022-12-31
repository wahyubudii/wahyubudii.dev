import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const linkedinProfile = "https://linkedin.com/in/wahyubudiutomo/"
  return (
    <div className='py-6 container mx-auto dark:text-white'>
      <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40 text-xs flex flex-col items-center justify-center">
        <p className='after:content-["."]'>Built and designed by <Link href={linkedinProfile}>Wahyu Budi Utomo</Link></p>
        <p className='mt-2'>All rights reserved<span className='ml-1 after:content-["©"]'></span></p>
      </div>
    </div>
  )
}
