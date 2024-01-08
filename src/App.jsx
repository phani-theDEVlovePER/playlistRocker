import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import { light, moon } from './assets'
import Chats from './components/Chats'

const App = () => {
  const [theme, setTheme] = useState('dark')
  const element = document.documentElement
  
  // const [options, setOptions] = useState([])
  const options = ['home', 'chats', 'updates', 'news']

  useEffect(() => {
    if (theme == 'dark') {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }, [theme])
  return (
    <>
      <div className='min-w-[100vw] h-[100vh] overflow-scroll scrollbar-hide bg-[#EEE0C9] text-slate-800 dark:text-[#5C8374] dark:bg-[#183D3D] duration-100 py-2'>

      {/* toggel's */}
        <div className='fixed top-5 right-5 duration-100 bg-[#96B6C5] dark:bg-slate-600 dark:text-gray-100 bg-gray-200 text-black rounded py-1 px-3'>
          <button className='flex items-center justify-center gap-2'>
            <img src={light} alt='sun' className='w-7 h-7 bg-[#EEE0C9] dark:bg-slate-400 rounded p-1' onClick={() => setTheme('light')}></img>
            <img src={moon} alt='sun' className='w-7 h-7 bg-[#EEE0C9] dark:bg-slate-400 rounded p-1' onClick={() => setTheme('dark')}></img>
          </button>
        </div>

        {/* <div className='bg-red-400 h-full rounded-md'>
          <div className='bg-white h-[3rem] text-black'>
            {
              options.map(
                (option)=>{
                  console.log(option)
                }
              )
            }
          </div>
          <div></div>
          home page
        </div> */}

        <div className='min-h-full min-w-full flex flex-col items-center mt-24'>
          <Home />
          {/* <Chats /> */}
        </div>
      </div>
    </>
  )
}

export default App
