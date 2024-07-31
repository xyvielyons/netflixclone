'use client'
import React from 'react'
import MovieList from './MovieList'
import { useQuery } from 'react-query'
import axios from 'axios'
const config = {
    headers:{
        accept: 'application/json',
        Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmY5MTk3NDI3ZTNkYTZiZTcxZDhlYWJiNGIyNDFjYyIsIm5iZiI6MTcyMjM3MzY4Ny4wMDE1NjgsInN1YiI6IjY2YTU2NjAxOTEyMTRjYWZmZmI4YTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TcEGGOaUOSvPzZhEsf5G74cOSpekECWpDMQmMp28Qkk`
    }
}
function Movies() {

    const {isLoading,data}  = useQuery('PopularMovies',()=>{
        return axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',config)

    })

    if(isLoading){
        return <h1>Loading...........</h1>
    }

   const PopularMovies = data?.data.results

  return (
    <div className='h-full mt-10 bg-zinc-900'>
        <MovieList title='Trending' data={PopularMovies}></MovieList>
    </div>
  )
}

export default Movies