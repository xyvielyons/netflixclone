import React from 'react'
import Logout from './logout'
import Image from 'next/image'
import { account } from '@/app/appwrite'
import { useAppDispatch } from '@/hooks/hooks'
import { falseState } from '@/store/slices/userslice'
import { useRouter } from 'next/navigation'
interface AccountMenuProps {
    visible?:boolean
    image:string
    name:string
}
function AccountMenu({visible,image,name}:AccountMenuProps) {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const logout = async()=>{
        const result = await account.deleteSessions();
        router.push('/auth')
        dispatch(falseState())

    }
    if(!visible){
        return null;
    }
  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-gray-800 flex'>
        <div className="flex flex-col gap-3">
            <div className="px-3 group/item flex flex-row gap-3 items-center w-full ">
                <Image src={image} alt='profile-pic' width={200} height={200} className='w-8 rounded-md'></Image>
                <p className='text-white text-sm group-hover/item:underline'>
                   {name}
                </p>
            </div>
            <hr className='bg-gray-600 border-0 h-px my-4'/>

            <div onClick={logout} className="px-3 text-center text-white text-sm hover:underline">
                Sign out of Netflix
            </div>

        </div>
    </div>
  )
}

export default AccountMenu