import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import { add } from '../assets'

const InputData = () => {
    const [inputLinks, setInputLinks] = useState([])
    const [link, setLink] = useState([])

    const handleAddLink = (e) => {
        e.preventDefault()
        if (link) {
            setInputLinks(prev => [...prev, link])
            setLink('')
        }
    }
    return (
        <div className='min-w-full min-h-full'>
            <form onSubmit={handleAddLink} className='h-20 flex justify-center items-center gap-1 mt-2'>
                <input className='dark:bg-[#93B1A6] outline-none border-none w-[70%] py-1 px-4 text-black placeholder:text-slate-500 caret-slate-700 rounded-sm' type='text' value={link} placeholder='Enter Links' onChange={(e) => setLink(e.target.value)} />
                <button className='bg-[#1c3636] rounded-3xl text-gray-300' type='submit'>
                    <img src={add} alt='add' className='h-8 p-1'/>
                </button>
            </form>
            <Hero inputLinks={inputLinks} />
        </div>
    )
}

export default InputData
