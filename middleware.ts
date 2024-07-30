import { PublicRoutes,AuthRoutes,ApiAuthPrefix,DEFAULT_LOGIN_REDIRECT } from "./routes"
// export default auth((req) => {
//  const {nextUrl} = req
//  const isLoggedIn = !!req.auth
//  console.log("IS LOGGEDIN",isLoggedIn)
//  const isApiAuthRoute = nextUrl.pathname.startsWith(ApiAuthPrefix)
//  const isPublicRoute = PublicRoutes.includes(nextUrl.pathname)
//  const isAuthRoute = AuthRoutes.includes(nextUrl.pathname)

//  if(isApiAuthRoute){
//   return undefined
//  }
//  if(isAuthRoute){
//   if(isLoggedIn){
//     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))

//   }
//   return undefined;
//  }
//  if(!isLoggedIn && !isPublicRoute){
//   return Response.redirect(new URL("/auth/login",nextUrl))
//  }

// return undefined
// })
export function middleware(req:any){
    const {nextUrl} = req;
    console.log('invoked')
    console.log(req)
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}