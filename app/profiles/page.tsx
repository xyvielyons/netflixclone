'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { getUserDetails } from '@/lib/fetcher'
import { avatars } from '../appwrite'
import { useRouter } from 'next/navigation'
function Profiles() {
    const [userData, setUserData] = useState<any>()
    const router = useRouter()
    const navigateToHome = ()=>{
        console.log("clicked")
        router.push('/')
    }

    useEffect(() => {
        const getUserData = async()=>{
            const user:any = await getUserDetails()
            if(user){
                setUserData(user.userDetails)
            }
           
        }
    
        getUserData()
     
    }, [])

    const getavartar = avatars.getInitials(userData?.name).href;
  

    

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="flex flex-col">
            <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching</h1>
            <div className="flex items-center justify-center gap-8 mt-10"></div>
            <div className="" onClick={navigateToHome}>
                <div className="group flex-row w-44 mx-auto">
                    <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                        <Image src={getavartar} width={200} height={200} alt='profile'/>
                    </div>
                    <div className="mt-4 text-gray-400 text-center group-hover:text-white">
                        {userData?.name}
                    </div>

                </div>
                
            </div>

        </div>

    </div>
  )
}

export default Profiles