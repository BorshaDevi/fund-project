import verifyToken from "@/lib/auth"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
 export const config={
    matcher:['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
 }
export  async function middleware(request) {
    console.log(" Middleware is running:", request.nextUrl.pathname);
    try{
        const routers=['/','/employee','/employeelist', '/updateemployeedata/[id]', '/useprofile']
      const matchRoute=routers.some(route => request.nextUrl.pathname=== route || request.nextUrl.pathname.startsWith(route + '/'))
      
      if(matchRoute){
        const token=(await cookies()).get('token')?.value
        console.log('token', token)
        const user= token? await verifyToken(token) : null
        console.log('user', user)
            if(!user && request.nextUrl.pathname !== '/login'){
                const loginUrl=new URL('/login',request.url)
                loginUrl.searchParams.set('from',request.nextUrl.pathname)
                return NextResponse.redirect(loginUrl)
            }
        
        return NextResponse.next()

      }
    }catch(err){
        console.error('Middleware error' , err)
        return NextResponse.next()
    }
}