import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Header() {
    const itemsNav = [
        { name: "About", icons: "", url: "/about"},
        { name: "Blog", icons: "", url: "/blog"},
    ]
  return (
    <div className=''>
        <div className="container mx-auto">
            <div className="h-20 mx-40 flex items-center justify-between">
                <div className="w-2/3">
                    <Link href="/" className='font-semibold uppercase'>Wahyu Budi Utomo</Link>
                </div>
                <div className="w-1/3 flex items-center justify-end space-x-10">
                    {itemsNav.map((val, index) => {
                        return (
                            <Link className='font-medium text-sm' key={index} href={val.url}>{val.name}</Link>
                        )
                    })}
                    <div className='space-x-4 flex items-center justify-center '>
                        <Link href="https://github.com">
                            <AiFillGithub className='text-black h-6 w-6' />
                        </Link>
                        <Link href="https://github.com">
                            <AiFillLinkedin className='text-black h-6 w-6' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
