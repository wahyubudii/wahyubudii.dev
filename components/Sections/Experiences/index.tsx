import React, { useState } from 'react'
import { experiencesData } from '../../../datas/experiencesData'
import { experienceColors } from '../../../utils/colors'

export default function Experiences() {
    const [indexActive, setIndexActive] = useState<number>(0)

    const selectedIndex = (id:number) => {
        setIndexActive(id)
    }
    
    return (
        <div className='py-12 container mx-auto'>
            <div className='mx-40'>
                <h1 className='text-2xl font-bold'>Experiences<span className='ml-3 after:content-["🦄"]'></span></h1>
                <div className="mt-6 flex">
                    <ul className="text-sm font-medium" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        {experiencesData.map((val, index) => {
                            return (
                                <li key={index} onClick={() => selectedIndex(index)} className={`${indexActive === index && (experienceColors[indexActive].lightColor)} ${experienceColors[index].borderLight} mb-2 w-56 border-r-[4px]`} role="presentation">
                                    <button className="inline-block p-4 rounded-t-lg text-left" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{val.name}</button>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className='ml-16'>
                        <h3 className='font-semibold text-xl'>{experiencesData[indexActive].role}</h3>
                        <p className='mt-2 text-sm font-medium'>{experiencesData[indexActive].startDate} - {experiencesData[indexActive].endDate}</p>
                        <div className='flex flex-wrap gap-2 mt-3'>
                            {experiencesData[indexActive].skills.map((skill, indexSkill) => {
                                return <p key={indexSkill} className={`px-4 py-1 rounded-full ${experienceColors[indexSkill].lightColor} text-xs font-medium`}>{skill}</p>
                            })}
                            
                        </div>
                        <ul className='mt-8 space-y-4'>
                            {experiencesData[indexActive].description.map((val, index) => {
                                return (
                                    <div key={index} className='flex text-sm'>
                                        <span className='before:content-["⫸"] mr-3' />
                                        <p>{val}</p>
                                    </div>
                                )
                            })}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}
