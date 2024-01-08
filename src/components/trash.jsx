import React, { useEffect, useState } from 'react'

const InputData = () => {
    const [inputLinks, setInputLinks] = useState([])
    const [link, setLink]=useState([])

    const handleAddLink = (e) => {
        e.preventDefault()
        if (link){
            setInputLinks(prev=> [...prev, link])
            setLink('')
        }
    }

    useEffect(()=>{
        console.log(inputLinks)
    }, [inputLinks])
    return (
        <div>
            <form onSubmit={handleAddLink}>
                <input type='text' value={link} onChange={(e)=>setLink(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default InputData