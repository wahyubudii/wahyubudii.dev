import React from 'react'
import photoProfile from '../../../public/images/photo_profile.jpg'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='container mx-auto dark:text-white'>
      <div className="mx-10 py-16 sm:mx-20 lg:mx-24 xl:mx-40 sm:py-20 sm:pb-14 lg:py-16 xl:py-20 lg:flex items-center justify-center">
        <div className="mr-24 w-full pb-14">
          <RoughNotationGroup show={true}>
            <h1 className='text-4xl font-bold after:content-["."]'>Hi there, I&#39;m <span><RoughNotation type='underline'>Wahyu</RoughNotation></span></h1>
            <div className="mt-5 space-y-3 font-light leading-[26px] text-sm sm:text-normal text-slate-900 dark:text-white">
                <p>Welcome to my digital garden where i share what i&#39;m learning about <span className='font-medium dark:text-black'><RoughNotation type='highlight' multiline={true} color='#F3CCFF'>programming</RoughNotation></span> or <span className='font-medium dark:text-black'><RoughNotation multiline={true} type='highlight' color='#BCEAD5'>technology related.</RoughNotation></span> Becoming a better developer and growing a career in tech. Let`s hang out on <Link href="https://google.com" target="_blank" className='font-medium dark:text-black'><RoughNotation multiline={true} type='highlight' color='#B4CDE6'>LinkedIn</RoughNotation></Link></p>
                <p>I grew up in a small village located in <Link href="https://google.com" target="_blank" className='font-medium dark:text-black after:content-["."]'><RoughNotation multiline={true} type='highlight' color='#F3CCFF'>Lamongan, Jawa Timur</RoughNotation></Link> Currently study in <Link className='font-medium dark:text-black' href="https://google.com" target="_blank"><RoughNotation multiline={true} type='highlight' color='#DFDFDE'>University of Muhammadiyah Malang</RoughNotation></Link> with Bachelor&#39;s degree in Informatics (Computer Science).</p>
                <p>I love making tools are user-friendly, simple and delightful. For now I&#39;m focusing on <span className='font-medium dark:text-black'><RoughNotation multiline={true} type='highlight' color='#BCEAD5'>Web Developer (Front-End Developer)</RoughNotation></span> to create wonderful things.</p>
            </div>
          </RoughNotationGroup>
        </div>
        <div className='sm:flex rounded-full p-[2px]'>
          <div className='relative border-[2.5px] border-white mx-auto rounded-full h-72 w-72 sm:h-80 sm:w-80 lg:h-80 lg:w-80 xl:h-72 xl:w-72 ml-auto bg-center bg-cover flex' style={{backgroundImage: `url(${photoProfile.src})`}}>
            <div className='absolute top-8 right-3 p-2 rounded-full border-2 border-black bg-white dark:bg-slate-700 dark:border-[2.5px] dark:border-white text-2xl m-auto animate-wave after:content-["👋"]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
