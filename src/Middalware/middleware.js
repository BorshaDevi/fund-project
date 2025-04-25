import verifyToken from "@/lib/auth"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const routers=['/', '/employee']
export default async function middleware(req) {
    try{
      const {pathname}=req.nextUrl
      const matchRoute=routers.some(route => pathname=== route || pathname.startsWith(route + '/'))
      
      if(matchRoute){
        const token=(await cookies()).get('token').value
        const user= token? await verifyToken(token) : null
        if(!user){
            if(pathname !== '/login'){
                const loginUrl=new URL('/login',req.url)
                loginUrl.searchParams().set('from',pathname)
                return NextResponse.redirect(loginUrl)
            }
        }
        return NextResponse.next()

      }
    }catch(err){
        console.error('Middleware error' , err)
    }
}