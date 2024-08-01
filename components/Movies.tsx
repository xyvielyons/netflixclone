'use client'
import React from 'react'
import MovieList from './MovieList'
import { useInfiniteQuery, useQuery } from 'react-query'
import axios from 'axios'
const config = {
    headers:{
        accept: 'application/json',
        Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmY5MTk3NDI3ZTNkYTZiZTcxZDhlYWJiNGIyNDFjYyIsIm5iZiI6MTcyMjM3MzY4Ny4wMDE1NjgsInN1YiI6IjY2YTU2NjAxOTEyMTRjYWZmZmI4YTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TcEGGOaUOSvPzZhEsf5G74cOSpekECWpDMQmMp28Qkk`
    }
}

const fetchMovieData = async({ pageParam = 1 })=>{
    const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageParam}`,config)
    const movies = data?.data.results
    return movies
}
function Movies() {

    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
    }  = useInfiniteQuery({
        queryKey: ['popularmovies'],
        queryFn: fetchMovieData,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 10) return undefined;
            return pages.length + 1;
        },
    })
    const handleScroll = (event:any) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            fetchNextPage();
        }
        
    };

    if(isLoading){
        return <h1>Loading...........</h1>
    }
  
   const movies = data?.pages

   
  
  return (
    <div  className='h-full mt-10 bg-zinc-900' onScrollCapture={handleScroll} style={{ overflowY: 'scroll', height: '100vh' }}>
        <MovieList title='Trending' data={movies}></MovieList>
       
    </div>
  )
}

export default Movies