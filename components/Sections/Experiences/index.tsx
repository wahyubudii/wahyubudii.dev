import React, { useState } from 'react'
import { experiencesData } from '../../../data/experiencesData'

export default function Experiences() {
    const [indexActive, setIndexActive] = useState<number>(0)

    const selectedIndex = (id:number) => {
        setIndexActive(id)
    }
    
    return (
        <div className='py-10'>
            <h1 className='text-2xl font-bold'>Experiences<span className='ml-3 after:content-["🦄"]'></span></h1>
            <div className="mt-6 lg:flex">
                <ul className="text-sm font-medium grid grid-cols-2 gap-1 sm:gap-2 lg:grid-cols-none lg:gap-0 lg:flex-col group">
                    {experiencesData.map((val, index) => {
                        return (
                            <li key={index} onClick={() => selectedIndex(index)} className={`${indexActive === index ? "bg-blue-700 dark:bg-slate-700 text-white border-yellow-400" : "bg-white dark:bg-slate-800 border-gray-100 hover:bg-blue-50 dark:hover:bg-slate-600"} w-full border-r-[3px]`}>
                                <button className="w-full h-full text-xs sm:text-sm lg:text-normal p-4 lg:p-6 rounded-t-lg text-left" type="button">{val.name}</button>
                            </li>
                        )
                    })}
                </ul>
                <ul className='py-10 mt-5 lg:mt-0 lg:ml-2 rounded px-8 py-5 w-full bg-white dark:bg-slate-800'>
                    <h3 className='font-semibold text-xl'>{experiencesData[indexActive].role}</h3>
                    <p className='mt-2 text-xs sm:text-sm font-medium'>{experiencesData[indexActive].startDate} - {experiencesData[indexActive].endDate}</p>
                    <div className='flex flex-wrap gap-2 mt-3'>
                        {experiencesData[indexActive].skills.map((skill, indexSkill) => {
                            return <p key={indexSkill} className={`px-4 py-1 rounded-full bg-gray-100 dark:bg-slate-600 dark:text-white text-blue-700 text-[11px] sm:text-xs font-medium`}>{skill}</p>
                            // return <p key={indexSkill} className={`px-4 py-1 rounded-full ${experienceColors[indexSkill].lightColor} text-xs font-medium`}>{skill}</p>
                        })}
                        
                    </div>
                    <ul className='mt-8 space-y-3'>
                        {experiencesData[indexActive].description.map((val, index) => {
                            return (
                                <div key={index} className='flex text-xs sm:text-sm'>
                                    <span className='before:content-["⫸"] mr-3' />
                                    <p>{val}</p>
                                </div>
                            )
                        })}
                    </ul>
                </ul>
            </div>
        </div>
    )
}
