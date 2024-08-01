'use client'
import React,{useCallback, useState} from 'react'
import Image from 'next/image'
import Inputcomponent from '@/components/InputComponent'
import { account,ID } from '@/app/appwrite'
import { OAuthProvider } from 'appwrite'
import { AppwriteException } from 'appwrite'
import Success from '@/components/success'
import Error from '@/components/error'
import { signup } from '@/appwrite/signup'
import { useAppDispatch } from '@/hooks/hooks'
import { trueState } from '@/store/slices/userslice'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
import { githubSignup,githubLogin } from '@/appwrite/signup'
import { useRouter } from 'next/navigation'
function Auth() {
    const [email,setEmail] = useState<string>('')
    const [name,setname] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [variant, setVariant] = useState('login');
    const [error,setError] = useState<string | null>(null)
    const [success,setSuccess] = useState<string | null>(null)
    const dispatch1 = useAppDispatch();
    const router1 = useRouter();

    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant)=>currentVariant === 'login' ? "register":"login")
    },[])
    const githublogin = useCallback(async()=>{
        setSuccess(null)
        setError(null)
        try {

          
            const githubcreate = await githubSignup();
            
            dispatch1(trueState())
            setSuccess("account linked to your github profile")
        } catch (error) {
            const appwriteError = error as AppwriteException;
            setError(appwriteError.message)
        }

    },[variant])
    const googlelogin = useCallback(async()=>{
        setSuccess(null)
        setError(null)
        try {

          
            const googlecreate = await account.createOAuth2Session(
                OAuthProvider.Google,
                `${window.location.origin}/profiles`,
                `${window.location.origin}/auth`
            );
            
            dispatch1(trueState())
            setSuccess("account linked to your google profile")
        } catch (error) {
            const appwriteError = error as AppwriteException;
            setError(appwriteError.message)
        }

    },[variant])
    const register = useCallback(async()=>{
        setError(null)
        setSuccess(null)
            try {
                if(variant === 'login'){
                    const login = await account.createEmailPasswordSession(email,password);
                    dispatch1(trueState())
                    console.log(login)
                    setSuccess("logging in .....")
                    router1.push('/profiles')


                }
                if(variant === 'register'){
                    const create = await signup(email,name,password);
                    setSuccess("account created")
                    setVariant('login')
                    setPassword("")
                    setEmail("")
                    setSuccess(null)

                }
            } catch (error:any) {
                const appwriteError = error as AppwriteException;
                setError(appwriteError.message)
                const CatchedAppwriteError = appwriteError.message;

                  if (CatchedAppwriteError.includes('Invalid `email` param')) {
                    setError('Invalid email address');
                  } else if (CatchedAppwriteError.includes('User already exists')) {
                    setError('User already exists');
                  } else if(CatchedAppwriteError.includes('Invalid `password` param')){
                    setError('Invalid password');
                  }
                   else if(CatchedAppwriteError.includes('Invalid `password` param')){
                    setError('Invalid password');
                  }
                   else if(CatchedAppwriteError.includes('Rate limit for the current endpoint has been exceeded.')){
                    setError('you have exceeded your trial limit try again in the next 1hour');
                  }
                }
                
               

                
            
    },[variant,email,password,name])
    

  return (
    <div className='relative h-screen w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
        <div className="bg-black w-full h-full md:bg-opacity-50">
            <nav className='px-12 py-5'>
               <Image src ="/logo.png" alt='logo' width={100} height={100} ></Image>
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className='text-white text-3xl mb-8 font-semibold'>
                        {variant === 'login' ? 'Sign in' : 'Register'}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant === 'register' && (
                                <Inputcomponent
                                id='name'
                                label='Name'
                                onChange={(ev:any)=>setname(ev.target.value)}
                                type=''
                                value={name}
                                ></Inputcomponent>

                        )}
                       

                        <Inputcomponent
                        id='email'
                        label='Email'
                        onChange={(ev:any)=>setEmail(ev.target.value)}
                        type='email'
                        value={email}
                        ></Inputcomponent>

                        <Inputcomponent
                        id='password'
                        label='Password'
                        onChange={(ev:any)=>setPassword(ev.target.value)}
                        type='password'
                        value={password}
                        ></Inputcomponent>
                    
                    </div>
                    {success && (
                       <div className="pt-4">
                         <Success success={success}></Success>
                       </div>
                    )}
                    {error && (
                        <div className="pt-4">
                                <Error error={error}></Error>
                        </div>
                        
                    )}
                    
                    
                    
                    <button className='bg-red-500 py-3 text-white rounded-md w-full  hover:bg-red-700 transition mt-4' onClick={register}>
                        {variant === 'login' ? "Login" : "Sign up"}
                    </button>

                    <div className="w-full flex flex-row justify-center items-center p-4 gap-2">
                        <div onClick={githublogin} className="text-white cursor-pointer w-[42px] h-[42px] flex items-center bg-white rounded-full justify-center"><FaGithub className='text-slate-800 w-[24px] h-[24px]'/></div>
                        <div onClick={googlelogin} className="text-white cursor-pointer w-[42px] h-[42px] flex items-center bg-white rounded-full justify-center"><FcGoogle className='text-slate-800 w-[24px] h-[24px]'/></div>
                    </div>

                    <p className='text-neutral-500 mt-12'>
                        {variant === 'login' ? "first time using Netflix?":"Already have an account?"}
                        <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                            {variant === 'login' ? 'Create an account' : 'Login' }
                        </span>
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Auth