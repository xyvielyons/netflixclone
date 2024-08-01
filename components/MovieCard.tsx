'use client'
import React from 'react'
import Image from 'next/image'
import { BsFillPlayFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
interface MovieCardProps {
    data:Record<string,any>
}

function MovieCard({data}:MovieCardProps) {
    const router= useRouter()
  return (
    <div className=""><Link href={`/watch?id=${data.id}`}>
         <div className='group bg-zinc-900 col-span relative h-[35vw]'>
         <Image className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[35vw]" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} width={100} height={100} alt="poster"></Image>
         <div 
            className="
            opacity-0
            absolute
            top-0 
            transition 
            duration-200 
            z-10 
            invisible 
            sm:visible 
            delay-300 
            w-full 
            scale-0 
            group-hover:scale-110 
            group-hover:-transition-y-[20vw] 
            group-hover:-translate-x-[2vw]  
            group-hover:opacity-100"
         >
            <Image 
            className="
            cursor-pointer 
            object-cover 
            transition 
            duration 
            shadow-xl 
            rounded-t-md
            w-full
            h-[35vw]" 
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`} 
            width={100} 
            height={100} 
            alt="Thumbnail"></Image>

            <div 
            className="
            z-10
            bg-zinc-800
            p-2
            lg:p-4
            absolute
            w-full
            transition
            shadow-md
            rounded-b-md
            ">
                <div className="flex flex-row items-center gap-3">
                    <Link href={`/watch?id=${data.id}`}>
                        <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300" >
                            <BsFillPlayFill size={30}></BsFillPlayFill>
                        </div>

                    </Link>
                    
                    <p className='text-green-400 font-semibold mt-4 text-sm'>
                        Release Date <span className='text-white'>{data.release_date}</span>
                    </p>
                    
                </div>
                <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className='text-white text-[14px] lg:text-sm'>{data.title}</p>
                </div>
                    
            </div>


         </div>
         </div>
        </Link></div>
   
  
  )
}

export default MovieCard