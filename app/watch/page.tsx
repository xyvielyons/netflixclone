'use client'
import React, { useEffect,useState } from 'react'
import { usePathname,useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query'
import axios from 'axios'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import '@vidstack/react/player/styles/base.css';
import { 
    MediaPlayer,
    MediaProvider} from '@vidstack/react';
const config = {
  headers:{
      accept: 'application/json',
      Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmY5MTk3NDI3ZTNkYTZiZTcxZDhlYWJiNGIyNDFjYyIsIm5iZiI6MTcyMjM3MzY4Ny4wMDE1NjgsInN1YiI6IjY2YTU2NjAxOTEyMTRjYWZmZmI4YTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TcEGGOaUOSvPzZhEsf5G74cOSpekECWpDMQmMp28Qkk`
  }
}
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
function PlayerPage() {
    const [id, setId] = useState<any>()
    const pathname = usePathname()
    const searchParams = useSearchParams()
   const search = searchParams.get('id')
   const router = useRouter();


   useEffect(()=>{
    setId(search)
   },[pathname,search])
  
   const {isLoading,data}  = useQuery('PopularMovies',()=>{
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,config)

  })
  
if(isLoading){
    return <h1 className='text-2xl text-white'>Loading .....................</h1>
}

const movie = data?.data.results[0]

console.log(movie)
   
  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed w-full p-4 z-10 flex  flex-row items-center gap-8 bg-black bg-opacity-70 '>
          <AiOutlineArrowLeft onClick={()=>router.push('/')}  className='text-white' size={40}></AiOutlineArrowLeft>
          <p className='text-white text-1xl md:text-3xl font-bold'>
            <span className='font-light'>
              Watching:
            </span>
            {movie?.name}
          </p>
      </nav>
      <Suspense fallback={<p className='text-white text-2xl'>Loading feed...</p>}>
        <MediaPlayer poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='h-full w-full' autoPlay controls loop src={`https://www.youtube.com/watch?v=${movie?.key}`}>
           <MediaProvider />
        </MediaPlayer>

      </Suspense>
        
    </div>
  )
}

export default PlayerPage