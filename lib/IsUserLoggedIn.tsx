'use client'
import React, { useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '@/hooks/hooks';
import { useRouter } from 'next/navigation';
import { account } from '@/app/appwrite';
import { falseState, trueState } from '@/store/slices/userslice';
import axios from 'axios';
function IsUserLoggedIn({children}:{children:React.ReactNode}) {
    const GetState = useAppSelector((state)=>state.reducer.userAuthState.userAuthState);
    const router = useRouter()
    const dispatch1 = useAppDispatch()

    useEffect(()=>{
          //  if(!GetState){
          //   router.push('/auth')

          //  }

            console.log(GetState)

    },[GetState])


   useEffect(()=>{
      const getUser = async()=>{
         try {
          const GetUserInfo = await account.get()
          const session = await account.getSession('current');
        //   console.log("my user info",GetUserInfo)
        //   // Provider information
        //  console.log(session.provider);
        //  console.log("mysession",session);
        //  console.log(session.providerUid);
        //  console.log(session.providerAccessToken);

         

          return GetUserInfo
         } catch (error:any) {
            dispatch1(falseState())
       
         }
         
      }
     getUser()
     
      
     
   },[])

  return (
    <div>{children}</div>
  )
}

export default IsUserLoggedIn