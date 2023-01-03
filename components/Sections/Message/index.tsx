import React, { FormEvent, useState } from 'react'
import { Email } from '../../../types'
import { RiMailSendLine } from 'react-icons/ri'

export default function Message() {
    const [fields, setFields] = useState<Email>({
        email: "",
        message: ""
    })

    const fieldHandler = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name: string | any = e.currentTarget.getAttribute("name")
        setFields({
            ...fields,
            [name]: e.currentTarget.value
        })
    }

    const messageHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const subject = "Wahyu Budi Utomo | Personal Website"
        window.location.href = `mailto:${fields.email}&subject=${subject} &body=${fields.message}`
        setFields({
            email: "",
            message: ""
        })
    }

    return (
        <div className='py-12 container mx-auto dark:text-white'>
            <div className="mx-10 sm:mx-20 lg:mx-24 xl:mx-40">
                <h1 className='text-2xl font-bold'>Message<span className='ml-3 after:content-["🚀"]'></span></h1>
                <form onSubmit={messageHandler} className="mt-6">
                    <div>
                        <input onChange={fieldHandler} type="email" name="email" id="email" className="peer block rounded py-2.5 px-4 w-full text-sm text-gray-900 dark:text-white dark:bg-slate-800 border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 invalid:focus:ring-pink-700 invalid:focus:border-red-500 peer" value={fields.email} placeholder="Email address" />
                        <p className="invisible peer-invalid:visible mt-1 text-red-500 dark:text-red-400 text-xs italic">Please use valid email</p>
                    </div>
                    {/* BUG validation message */}
                    <div className="pt-3">
                        <textarea onChange={fieldHandler} name="message" id="message" className="peer/message rounded overflow-y-hidden h-52 block py-2.5 px-4 w-full text-sm text-gray-900 dark:text-white dark:bg-slate-800 border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 invalid:focus:ring-pink-700 invalid:focus:border-red-500 peer" value={fields.message} placeholder="Message" />
                        <p className={`${fields.message ? "invisible" : "peer-invalid:visible"} invisible mt-1 text-red-500 text-xs italic`}>Message doesn&#39;t empty.</p>
                    </div>
                    <div className='flex gap-4'>
                        <button type='submit' className='mt-4 sm:mt-12 rounded-full bg-blue-700 dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-400 hover:scale-105 transition px-1.5 py-1.5 sm:px-2 sm:py-2 flex items-center justify-center space-x-2'>
                            <div className='bg-white dark:bg-black rounded-full p-1.5'><RiMailSendLine /></div>
                            <p className='text-xs md:text-sm text-white pr-3 pl-1'>Send message</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
