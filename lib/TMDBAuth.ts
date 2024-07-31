'use client'

import { useQuery } from "react-query"
import axios from "axios"


const config = {
    headers:{
        accept: 'application/json',
        Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmY5MTk3NDI3ZTNkYTZiZTcxZDhlYWJiNGIyNDFjYyIsIm5iZiI6MTcyMjM3MzY4Ny4wMDE1NjgsInN1YiI6IjY2YTU2NjAxOTEyMTRjYWZmZmI4YTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TcEGGOaUOSvPzZhEsf5G74cOSpekECWpDMQmMp28Qkk`
    }
}
export const TmdbQuery = async(key:string,url:string)=>{
    const {isLoading,data} = await useQuery(key,()=>{

        return axios.get(url,config);
    })

    if(!isLoading){
        return {isLoading,data}

    }
}