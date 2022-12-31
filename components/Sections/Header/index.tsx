import React, { useState } from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Header() {
    const itemsNav = [
        { name: "About", icons: "", url: "/about"},
        { name: "Blog", icons: "", url: "/blog"},
    ]

    const socialMedia = [
        { name: "Github", url: "https://github.com/wahyubudii"},
        { name: "LinkedIn", url: "https://linkedin.com/in/wahyubudiutomo/"},
    ]

    const [sidebar, setSidebar] = useState<boolean>(false)

    const handleSidebar = () => {
        return setSidebar(!sidebar)
    }


    return (
        <div className="container mx-auto dark:text-white">
            <div className="h-20 mx-10 sm:mx-20 lg:mx-24 xl:mx-40 flex items-center justify-between">
                <Link href="/" className='font-semibold uppercase'>Wahyu Budi Utomo</Link>
                <button className='block text-lg sm:hidden' onClick={handleSidebar}><AiOutlineMenu /></button>
                <div className="hidden sm:inline-flex min-w-max flex items-center justify-end sm:space-x-5 lg:space-x-10">
                    {itemsNav.map((val, index) => {
                        return (
                            <Link className='font-medium text-sm' key={index} href={val.url}>{val.name}</Link>
                        )
                    })}
                    <div className='space-x-4 flex items-center justify-center '>
                        { socialMedia.map((val, index) => {
                            return (
                                <Link key={index} href={val.url} target={'_blank'}>
                                    { val.name === "Github" ? <AiFillGithub className='text-black dark:text-white h-6 w-6' /> : <AiFillLinkedin className='text-black dark:text-white h-6 w-6' />}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className={`${sidebar ? "inline-flex z-10 fixed top-0 right-0 border-l border-slate-300 dark:border-slate-500 transition ease-in-out" : "hidden"} w-8/12 h-full bg-white dark:bg-black/95`}>
                    <div className='w-full py-3 flex flex-col items-end'>
                        <button className='h-14 w-14' onClick={handleSidebar}><AiOutlineClose size={16} /></button>
                        <div className='mt-7 text-sm font-semibold flex flex-col items-end w-full mx-10 space-y-4'>
                            {itemsNav.map((val, index) => {
                                return (
                                    <Link key={index} href={val.url} className='border-b border-slate-400 pb-1'>{val.name}</Link>
                                )
                            })}
                            <div className='pt-7 space-y-4 flex flex-col items-end justify-end'>
                                { socialMedia.map((val, index) => {
                                    return (
                                        <Link key={index} href={val.url} target={'_blank'}>
                                            { val.name === "Github" ? 
                                            <div className='rounded px-3.5 py-2 w-max bg-white border border-slate-300 flex items-center justify-center font-semibold text-black space-x-3'><AiFillGithub size={20}/><p>Github</p></div>
                                            : 
                                            <div className='rounded px-3.5 py-2 w-max bg-white border border-slate-300 flex items-center justify-center font-semibold text-black space-x-3'><AiFillLinkedin size={20}/><p>LinkedIn</p></div>
                                            }
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
