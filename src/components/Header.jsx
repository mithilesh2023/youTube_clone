import React from 'react'
import logo from '../images/youtube.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineKeyboardVoice } from 'react-icons/md';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { BsBell } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
const Header = () => {
  return (
    <div className='flex justify-between shadow-lg items-center p-1 sticky top-0 bg-white '>
      <div className='flex text-2xl text-center px-3  gap-3' >
        <AiOutlineMenu className='mt-4'/>
        <img src={logo} className="w-[60px]" alt="youtube_pic" />
      </div>
      <div className='flex  '>
        <input type="search" placeholder='search...' className='w-[500px]  text-xl rounded-tl-lg rounded-bl-lg border-2 border-slate-400 ' />
        <button className='border-2  border-slate-400 rounded-tr-lg rounded-br-lg bg-slate-300 text-xl p-3'><GoSearch /></button>
      </div>
      <div className='flex gap-4 text-2xl mr-4 p-3'>
        <MdOutlineKeyboardVoice />
        <HiOutlineVideoCamera />
        <BsBell />
      </div>
    </div>
  )
}

export default Header