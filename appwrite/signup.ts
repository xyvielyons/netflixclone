"use client"
import { account,ID,databases,avatars } from "@/app/appwrite"
import { OAuthProvider } from "appwrite";



const databaseId = '66ab00b10027a54f367f';
const userCollectionId = '66ab00dd001aafd07110';

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
                    `${window.location.origin}/profiles`,
                    `${window.location.origin}/auth`
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