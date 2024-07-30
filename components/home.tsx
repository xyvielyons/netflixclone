'use client'
import React, { useEffect, useState } from 'react'
import { getUserDetails } from '@/lib/fetcher'
function Home() {
    const [userData, setUserData] = useState<any>()

    useEffect(() => {
        const getUserData = async()=>{
            const user:any = await getUserDetails()
            if(user){
                setUserData(user.userDetails)
            }
           
        }
    
        getUserData()
     
    }, [])
   

    console.log(userData);
    

    
   
  return (
    <div>my name is:{userData?.name}</div>
  )
}

export default Home