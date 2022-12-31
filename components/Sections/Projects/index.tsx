import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { IoEarthSharp } from 'react-icons/io5'
import { projectsData } from '../../../datas/projectsData'

export default function Project() {
  return (
    <div className='py-12 container mx-auto dark:text-white'>
      <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40">
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Projects<span className='ml-3 after:content-["✨"]'></span></h1>
          <Link href="#" className='text-sm text-slate-600 font-semibold hover:text-sky-500 transition text-blue-600 hover:text-blue-500 dark:text-blue-400'>See More<span className='ml-2 after:content-[">"]'></span></Link>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          { projectsData.map((val, index) => {
            return (
            <div key={index} className={`flex flex-col justify-between max-h-96 px-6 py-10 rounded-lg text-black bg-white hover:bg-blue-700 hover:scale-105 dark:bg-slate-800 dark:hover:bg-slate-600 dark:text-white transition group`}>
                <div className='flex items-center justify-between'>
                  <h1 className='sm:text-[14px] lg:text-lg font-bold pr-4 group-hover:text-white'>{val.name}</h1>
                  <div className='flex gap-4'>
                    <Link href={val.urlLink} target="_blank"><IoEarthSharp className={`lg:w-6 lg:h-6 ${val.urlLink ? "visible" : "hidden"} group-hover:text-white`} /></Link>
                    <Link href={val.githubLink} target="_blank"><AiFillGithub className='lg:w-6 lg:h-6 group-hover:text-white' /></Link>
                  </div>
                </div>
                <p className='mt-4 text-[11px] lg:text-[12px] xl:text-sm line-clamp-4 xl:line-clamp-5 text-gray-600 group-hover:text-gray-200 dark:text-gray-300'>{val.description}</p>
                <div className='mt-6 flex flex-wrap gap-2'>
                  { val.techStacks.map((techStack, idx) => {
                    return <p key={idx} className='text-[10px] lg:text-[10px] xl:text-[11px] font-medium text-blue-600 dark:text-white bg-gray-100 dark:bg-slate-600 rounded-full px-3 py-1 w-fit group-hover:bg-blue-500 dark:group-hover:dark:bg-slate-500 group-hover:text-white'>{techStack}</p>
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
