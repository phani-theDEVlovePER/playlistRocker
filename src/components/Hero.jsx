import React, { useEffect, useState } from 'react'
import Display from './Display'
import { cross } from '../assets'

const Hero = (props) => {
  const enteredLinks = props.inputLinks

  return (
    <>
      <div className='overflow-hidden h-full py-2 px-8 text-white'>
        <div className='flex items-center justify-center underline tracking-wide mb-2'>
          <h1 className='font-bold text-xl'>Queue</h1>
        </div>
        <ol className='list-decimal w-full overflow-ellipsis'>
          {
            enteredLinks.map(
              (link, index) => (
                <div key={index} className='flex items-center justify-between'>
                  <li>{link}</li>
                  <button>
                    <img src={cross} className='w-5 hover:p-[2px] duration-100' />
                  </button>
                </div>
              )
            )
          }
        </ol>
      </div>
      <Display sourceLinks={enteredLinks} />
    </>
  )
}

export default Hero