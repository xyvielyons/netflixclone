'use client'
import React from 'react'
import Link from 'next/link';
import { BsFillPlayFill } from 'react-icons/bs';
interface PlayButtonProps {
    movieId:string; 
}

function PlayButton({movieId}:PlayButtonProps) {
    
  return (
    <div className="">
      <Link href={`/watch?id=${movieId}`}>
        <button
        className='bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition'
        >
          <BsFillPlayFill size={25} className='mr-1'></BsFillPlayFill>
          Play
        </button>
      </Link>
    </div>
    
  )
}

export default PlayButton