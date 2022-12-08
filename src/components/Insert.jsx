import React from 'react'
import Recomended_video from './Recomended_video'
import Sidebar from './Sidebar'
import {AiFillHome,AiFillFire,AiTwotoneLike} from 'react-icons/ai'
import {MdSubscriptions,MdOndemandVideo,MdOutlineCollections,MdWatchLater} from 'react-icons/md'
import {BiHistory} from 'react-icons/bi'

const Insert = () => {
  return (
    <div className='flex'>
        <div className='w-2/12'>
             <Sidebar icons={<AiFillHome className="mt-1 text-red-600"/>} title="Home"/>
             <Sidebar icons={<AiFillFire className="mt-2"/>} title="Tranding"/>
             <Sidebar icons={ <MdSubscriptions className='mt-1'/>} title="Subscription"/>
             <hr className='bg-slate-400 h-[1.4px]'/>
             <Sidebar icons={<MdOutlineCollections className="mt-1"/>} title="Library"/>
             <Sidebar icons={ <BiHistory className="mt-1"/>} title="History"/>
             <Sidebar icons={ <MdOndemandVideo className="mt-1"/>} title="Your videos"/>
             <Sidebar icons={ <MdWatchLater className="mt-1"/>} title="Watch Later"/>
             <Sidebar icons={<AiTwotoneLike className="mt-1"/>} title="Liked Videos"/>
             <hr  className='bg-slate-400 h-[1.4px]'/>
        </div>
        <div className='w-10/12'>
            <Recomended_video />
        </div>
    </div>
  )
}

export default Insert