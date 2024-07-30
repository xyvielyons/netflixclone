'use client'
import { account } from "@/app/appwrite"
export const getUserDetails = async()=>{
    console.log("function called")
    const userDetails = await account.get()
    return {userDetails}

}