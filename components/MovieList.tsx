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

  return (
    <div className='px-4 md:px-12 mt-4 space-y-8 '>
        <div className="">
            <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
                {title}
            </p>

            <div className="">
                {data.map((group:any,i:any)=>{
                      return (
                        <div className="grid grid-cols-4 gap-2" key={i}>
                           {group.map((movies:any)=>{
                             return <MovieCard key={movies.id} data={movies}></MovieCard>

                           })}
                        </div>
                      )
                      
                      
                    //   <MovieCard key={movie.id} data={movie}></MovieCard>
                    
                })}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList