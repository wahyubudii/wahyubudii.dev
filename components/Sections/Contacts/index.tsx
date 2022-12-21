import React, { FormEvent, useState } from 'react'
import { Email } from '../../../types'
import { RiMailSendLine } from 'react-icons/ri'

export default function Contacts() {
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
        <div className='py-12 container mx-auto'>
            <div className="mx-40">
                <h1 className='text-2xl font-bold'>Content<span className='ml-3 after:content-["🚀"]'></span></h1>
                <form onSubmit={messageHandler} className="mt-6">
                    <div>
                        <input onChange={fieldHandler} type="email" name="email" id="email" className="peer block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 invalid:focus:ring-pink-700 invalid:focus:border-red-500 peer" value={fields.email} placeholder="Email address" />
                        <p className="invisible peer-invalid:visible mt-1 text-red-500 text-xs italic">Please use valid email</p>
                    </div>
                    {/* BUG validation message */}
                    <div className="pt-3">
                        <textarea onChange={fieldHandler} name="message" id="message" className="peer/message overflow-y-hidden h-52 block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 invalid:focus:ring-pink-700 invalid:focus:border-red-500 peer" value={fields.message} placeholder="Message" />
                        <p className={`${fields.message ? "invisible" : "peer-invalid:visible"} invisible mt-1 text-red-500 text-xs italic`}>Message doesnt empty.</p>
                    </div>
                    <div className='flex gap-4'>
                        <button type='submit' className='mt-12 rounded-full bg-purple-500 hover:bg-purple-400 hover:scale-105 transition px-2 py-2 flex items-center justify-center space-x-2'>
                            <div className='bg-white rounded-full p-2'><RiMailSendLine /></div>
                            <p className='text-sm text-white pr-3 pl-1'>Send message</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
