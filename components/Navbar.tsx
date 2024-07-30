'use client'
import React,{useCallback, useState,useEffect} from 'react'
import Image from 'next/image'
import NavbarItem from './NavbarItem'
import { BsChevronDown,BsSearch,BsBell } from 'react-icons/bs'
import MobileMenu from './MobileMenu'
import { avatars } from '@/app/appwrite'
import { getUserDetails } from '@/lib/fetcher'
import AccountMenu from './AccountMenu'

const TOP_OFFSET = 66;

function Navbar() {
  const [showMobileMenu,setShowMobileMenu] = useState(false);
  const [showAccountMenu,setShowAccountMenu] = useState(false);
  const [showBackground,setShowBackground] = useState(false);
  const [userData, setUserData] = useState<any>()

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.screenY > TOP_OFFSET){
        setShowBackground(true)
        
      }else{
        setShowBackground(false)
      }
    }
    

    window.addEventListener('scroll',handleScroll);

    return ()=>{
        window.removeEventListener('scroll',handleScroll)
    }

  },[])
  const toggleMobileMenu = useCallback(()=>{
      setShowMobileMenu((current) => !current)
  },[])
  const toggleAccountMenu = useCallback(()=>{
      setShowAccountMenu((current) => !current)
  },[])

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
    <nav className='w-full fixed z-40'>
        <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
            <Image src="/logo.png" alt="logo" width={100} height={100}></Image>

            <div className="flex-row ml-8 gap-7 hidden lg:flex">
                <NavbarItem label='Home'></NavbarItem>
                <NavbarItem label='Series'></NavbarItem>
                <NavbarItem label='Films'></NavbarItem>
                <NavbarItem label='New & Popular'></NavbarItem>
                <NavbarItem label='My List'></NavbarItem>
                <NavbarItem label='Browse by languages'></NavbarItem>

            </div>
            <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <p className='text-white text-sm'>Browse</p>
                <BsChevronDown className={`text-white transition ${showMobileMenu ? `rotate-180`:`rotate-0`}`}></BsChevronDown>
                <MobileMenu visible={showMobileMenu}/>
            </div>

            <div className="flex flex-row ml-auto gap-7 items-center">
              <div className="text-gray-200 hover:text-gray-300 cursor-pointer"><BsSearch/></div>
              <div className="text-gray-200 hover:text-gray-300 cursor-pointer"><BsBell/></div>
              <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                  <Image src={getavartar} alt='profile-home-pic' width={200} height={200}></Image>
                </div>
                <BsChevronDown className={`text-white transition ${showAccountMenu ? `rotate-180`:`rotate-0`}`}></BsChevronDown>
                <AccountMenu visible={showAccountMenu} image={getavartar} name={userData?.name}/>

              </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar