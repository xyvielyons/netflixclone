'use client'
import React from 'react'
import { account } from '@/app/appwrite'
import { useAppDispatch } from '@/hooks/hooks'
import { falseState } from '@/store/slices/userslice'
import { useRouter } from 'next/navigation'
function Logout() {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const logout = async()=>{
        const result = await account.deleteSessions();
        router.push('/auth')
        dispatch(falseState())

    }

  return (
    <div>
        <button className='p-4 bg-emerald-500 text-white text-center' onClick={logout}>logout</button>
    </div>
  )
}

export default Logout