"use client"
import { account,ID,databases,avatars } from "@/app/appwrite"
import { OAuthProvider } from "appwrite";
import axios from "axios";



const databaseId = '66a80fe2002c8ee8aec1';
const userCollectionId = '66a80fe70023c9c2f073';

export const signup = async(email:string,name:string,password:string)=>{
    try {
        const create = await account.create(ID.unique(),email,password,name);
        if(!create) throw Error
        
        const getavartar = avatars.getInitials(name);

        const SaveToDatabase = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                id:create.$id,
                username:name,
                email,
                avartar:getavartar
            }

    )
        if(!SaveToDatabase) throw Error;
    } catch (error:any) {
        throw new Error(error)
        
    }
}
export const githubLogin = async()=>{
    try {
        const github = await account.createOAuth2Session(
            OAuthProvider.Github,
            'http://localhost:3000/',
            'http://localhost:3000/auth'
        )

     




    } catch (error:any) {
        throw new Error(error)
    }
}

export const githubSignup = async()=>{
    try {
                const github = await account.createOAuth2Session(
                    OAuthProvider.Github,
                    'http://localhost:3000/profiles',
                    'http://localhost:3000/auth'
                )
                // console.log("github",github)

                // const session = await account.getSession('current');
                // const GetUserInfo = await account.get()
                // const photo = await axios.get('https://api.github.com/user',{
                //     headers: {
                //         'Authorization': `Bearer ${session.providerAccessToken}`
                //       }
                // })
                // const profilePictureUrl = photo.data.avatar_url;
                // console.log(profilePictureUrl)
                // const SaveToDatabase = await databases.createDocument(
                //     databaseId,
                //     userCollectionId,
                //     ID.unique(),
                //     {
                //         id:GetUserInfo.$id,
                //         username:photo.data.name,
                //         email:GetUserInfo.email,
                //         avartar:profilePictureUrl
                //     }
                // )
                // console.log("save to database",SaveToDatabase)

                // if(!SaveToDatabase) throw Error;

                // return SaveToDatabase;

    } catch (error:any) {
        throw new Error(error)
    }
    

    
}