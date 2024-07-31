'use client'
import React from 'react'
import MovieCard from './MovieCard';
import { isEmpty } from 'lodash'

interface MovieListProps {
    data:any;
    title:string;
}


function MovieList({data,title}:MovieListProps) {
    if(isEmpty(data)){
        return null;
    }
    console.log(data)
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8 h-full'>
        <div className="">
            <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
                {title}
            </p>

            <div className="grid grid-cols-4 gap-2">
                {data.map((movie:any)=>{             
                      return <MovieCard key={movie.id} data={movie}></MovieCard>
                    
                })}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList