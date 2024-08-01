'use client'
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import PlayButton from './PlayButton'
import {AiOutlineInfoCircle} from "react-icons/ai"

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

function Billboard() {
const [YoutubeKey, setYoutubeKey] = useState<any>()
const [movieId, setMovieId] = useState<any>()
const [movieName, setMovieName] = useState()
const [movieDescription, setMovieDescription] = useState()
function getRandomNumber(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    useEffect(()=>{

        try {
            const getYoutubeKey = async()=>{
               console.log("start")
               const getPopularVideos = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',config)
               const videos = getPopularVideos.data.results
               console.log(videos)
               const generateRandomNumber = await getRandomNumber(0,20)            
               const getVideoKey = await videos[generateRandomNumber].id
               const description = await videos[generateRandomNumber].overview
               const getVideoYoutube = await axios.get(`https://api.themoviedb.org/3/movie/${getVideoKey}/videos?language=en-US`,config)
               const getYoutubeKey = getVideoYoutube.data.results[0].key
               const getYoutubeVideoName = getVideoYoutube.data.results[0]
               setMovieName(getYoutubeVideoName.name)
               setYoutubeKey(getYoutubeKey)
               setMovieDescription(description)
               setMovieId(getVideoKey)
              

            }

           getYoutubeKey()

           
            
        } catch (error) {
            console.log(error)
        }

    },[])
    
    const handlePlayPause = () => {
        // Prevent user interaction from affecting playing state
      };
     // autoplay has successfully started.
  
  return (
    <div className='relative h-[56.25vw] object-cover'>
        <div className="h-full w-full brightness-[60%]">
         <MediaPlayer muted autoPlay loop src={`https://www.youtube.com/watch?v=${YoutubeKey}`}>
           <MediaProvider />
        </MediaPlayer>

     </div>
       

        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
            <p className='text-white text-1xl md:text-3xl h-full w-[50%] lg:text-4xl font-bold drop-shadow-xl'>
                {movieName}
            </p>
            <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
                {movieDescription}

            </p>
            <div className="flex flex-row items-center mt-3 md:mt-4 gap-3 ">
                <PlayButton movieId={movieId}></PlayButton>
                <button
                className='bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg-text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'
                >
                <AiOutlineInfoCircle className='mr-1'/>
                More Info
                </button>
            </div>

        </div>

        
    </div>
  )
}

export default Billboard