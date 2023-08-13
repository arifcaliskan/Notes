import React, { useState } from 'react'
import { SlNote,SlClose, SlMenu, SlArrowRight } from "react-icons/sl";
const Navbar = () => {
    const [nav, setNav] =useState(true)
    const handleNav = () => {setNav(!nav)}

  return (
    <div className='flex bg-sky-950 h-28 md:h-24 '>
        <SlNote  className='flex text-9xl  items-center text-indigo-500 animate-bounce hover:cursor-pointer  ml-8 mt-0' />
        <p className='flex w-full text-4xl text-amber-400  items-center font-mono hover:cursor-pointer' >React Notes</p>
        <ul className='p-4 w-full hidden md:flex justify-end items-stretch text-white pe-5'>
            <li className='text-2xl ml-4 lg:text-3xl border-red-500 rounded-xl  flex items-center hover:cursor-pointer border-r border-l border-t p-2 hover:bg-zinc-200 hover:translate-y-1 ease-in-out duration-300 hover:text-red-500'>Notes</li>
            <li className=' flex items-center text-2xl ml-4 lg:text-3xl border-red-500 rounded-xl  hover:cursor-pointer border-r border-l border-t p-2 hover:bg-zinc-200 hover:translate-y-1 ease-in-out duration-300 hover:text-red-500'>Source Code</li>
            <li className=' flex items-center text-2xl ml-4 lg:text-3xl border-red-500 rounded-xl  hover:cursor-pointer border-r border-l border-t p-2 hover:bg-zinc-200 hover:translate-y-1 ease-in-out duration-300 hover:text-red-500'>About me</li>
            <li className=' flex items-center text-2xl ml-4 lg:text-3xl border-red-500 rounded-xl  hover:cursor-pointer border-r border-l border-t p-2 hover:bg-zinc-200 hover:translate-y-1 ease-in-out duration-300 hover:text-red-500'>Contact</li>
        </ul>
            
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <SlArrowRight  className='flex text-6xl items-center hover:text-white rotate-180 ease-in-out duration-300 mt-8 mr-8'  /> : <SlArrowRight className='flex text-6xl items-center hover:text-white  ease-in-out duration-300 mt-8 mr-8' />}
          
        </div>
        <div className={!nav? 'fixed left-0 top-0 border-r border-r-gray-700 h-full w-[60%] bg-sky-950 ease-in-out duration-500' : "fixed left-[-100%]  ease-in-out duration-500"}>
        <p className='flex w-full text-4xl text-amber-400  items-center font-mono hover:cursor-pointer mt-3 ml-3' >React Notes</p>
            <ul className='p-4 w-full justify-center flex-row text-white pe-5 items-center'>
                <li className='p-5 border-b border-red-500 hover:translate-x-3 ease-in-out duration-200 text-xl hover:bg-zinc-200 rounded-md hover:text-red-500'>Notes</li>
                <li className='p-5 border-b border-red-500 hover:translate-x-3 ease-in-out duration-200 text-xl hover:bg-zinc-200 rounded-md hover:text-red-500'>Source Code</li>
                <li className='p-5 border-b border-red-500 hover:translate-x-3 ease-in-out duration-200 text-xl hover:bg-zinc-200 rounded-md hover:text-red-500'>About me</li>
                <li className='p-5  hover:translate-x-3 ease-in-out duration-200 text-xl hover:bg-zinc-200 rounded-md hover:text-red-500'>Contact</li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar