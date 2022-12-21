import React from 'react'
import photoProfile from '../../../public/images/photo_profile.jpg'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='container mx-auto'>
      <div className="mx-40 py-20 lg:flex items-center justify-center">
        <div className="mr-24 w-full">
          <RoughNotationGroup show={true}>
            <h1 className='text-4xl font-bold after:content-["."]'>Hi there, I`m <span><RoughNotation type='underline'>Wahyu</RoughNotation></span></h1>
            <div className="mt-5 space-y-3 font-light leading-[26px] text-slate-900">
                <p>Welcome to my digital garden where i share what i`m learning about <span className='font-medium'><RoughNotation type='highlight' color='#F3CCFF'>programming</RoughNotation></span> or <span className='font-medium'><RoughNotation type='highlight' color='#BCEAD5'>technology related.</RoughNotation></span> Becoming a better developer and growing a career in tech. Let`s hang out on <Link href="https://google.com" target="_blank" className='font-medium'><RoughNotation type='highlight' color='#B4CDE6'>LinkedIn</RoughNotation></Link></p>
                <p>I grew up in a small village located in <Link href="https://google.com" target="_blank" className='font-medium after:content-["."]'><RoughNotation type='highlight' color='#F3CCFF'>Lamongan, Jawa Timur</RoughNotation></Link> Currently study in <Link className='font-medium' href="https://google.com" target="_blank"><RoughNotation type='highlight' color='#DFDFDE'>University of Muhammadiyah Malang</RoughNotation></Link> with Bachelor`s degree in Informatics (Computer Science).</p>
                <p>I love making tools are user-friendly, simple and delightful. For now I`m focusing on <span className='font-medium'><RoughNotation type='highlight' color='#BCEAD5'>Web Developer (Front-End Developer)</RoughNotation></span> to create wonderful things.</p>
            </div>
          </RoughNotationGroup>
        </div>
        <div>
          <div className='relative rounded-full h-72 w-72 ml-auto bg-center bg-cover flex' style={{backgroundImage: `url(${photoProfile.src})`}}>
            <div className='absolute top-8 right-3 p-2 rounded-full border-2 border-black bg-white text-2xl m-auto animate-wave after:content-["👋"]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
