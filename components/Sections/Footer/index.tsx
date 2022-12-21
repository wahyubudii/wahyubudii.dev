import React from 'react'
import { RoughNotation } from 'react-rough-notation'

export default function Footer() {
  return (
    <div className='py-6 container mx-auto'>
      <div className="mx-40 text-xs flex flex-col items-center justify-center">
        <p className='after:content-["."]'>Built and designed by <RoughNotation show={true} type='highlight' strokeWidth={3} color='#FFD39A'><span className='font-medium'>Wahyu Budi Utomo</span></RoughNotation></p>
        <p className='mt-2'>All rights reserved <span className='after:content-[".©"]'></span></p>
      </div>
    </div>
  )
}
