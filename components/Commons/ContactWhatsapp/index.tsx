import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io5'
import Link from 'next/link'

export default function ContactWhatsapp() {
  return (
    <Link href="https://wa.me/+6285856196359" target={'_blank'} className='fixed bottom-8 right-8 rounded-full group'>
        <div className='flex items-center justify-center p-3 bg-green-500 rounded-full'>
            <IoLogoWhatsapp className='animate-wave' size={26} color="white" fontWeight={8} />
            <p className='mx-2 text-white text-sm font-semibold hidden group-hover:block'>Chat on whatsapp!</p>
        </div>
    </Link>
  )
}
