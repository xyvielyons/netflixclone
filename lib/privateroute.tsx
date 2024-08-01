'use client'
import React, { useEffect } from 'react'
import { useAppSelector } from '@/hooks/hooks';
import { useRouter } from 'next/navigation';


function PrivateRoute({children}:{children:React.ReactNode}) {
    const GetState = useAppSelector((state)=>state.reducer.userAuthState.userAuthState);
    const router1 = useRouter()

    useEffect(()=>{
        if(!GetState){
            router1.push('/auth')
        }
    },[GetState])
    
  return (
    <div>{children}</div>
  )
}

export default PrivateRoute