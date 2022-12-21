import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { IoEarthSharp } from 'react-icons/io5'
import { projectsData } from '../../../datas/projectsData'
import { projectColors } from '../../../utils/colors'

export default function Project() {
  return (
    <div className='py-12 container mx-auto'>
      <div className="mx-40">
        <h1 className='text-2xl font-bold'>Projects<span className='ml-3 after:content-["✨"]'></span></h1>
        <div className="mt-6 grid grid-cols-3 gap-5">
          { projectsData.map((val, index) => {
            return (
              <div key={index} className={`flex flex-col justify-between max-h-96 px-5 py-8 rounded-lg text-white ${projectColors[index].lightColor} group hover:${projectColors[index].lighColorHover} hover:scale-105 transition`}>
                <div className=''>
                  <div className='flex items-center justify-between'>
                    <h1 className='text-lg font-semibold'>{val.name}</h1>
                    <div className='flex gap-4'>
                      <Link href={val.urlLink} target="_blank"><IoEarthSharp className={`w-6 h-6 ${val.urlLink ? "visible" : "hidden"}`} /></Link>
                      <Link href={val.githubLink} target="_blank"><AiFillGithub className='w-6 h-6' /></Link>
                    </div>
                  </div>
                  <p className='mt-4 text-sm line-clamp-5'>{val.description}</p>
                </div>
                <div className='mt-6 flex flex-wrap gap-2'>
                  { val.techStacks.map((techStack, idx) => {
                    return <p key={idx} className='text-xs rounded-full px-3 py-1 w-fit font-medium text-slate-800 bg-gray-200 group-hover:bg-gray-100'>{techStack}</p>
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
