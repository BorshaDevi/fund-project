import { NextResponse } from "next/server"

const routers=['/', '/employee']
export default function middleware(req) {
    try{
      const {pathname}=req.nextUrl
      const matchRoute=routers.some(route => pathname=== route || pathname.startsWith(route + '/'))
      if(!matchRoute){
        return NextResponse.redirect(new URL ('/login') , req.nextUrl)
      }
      
    }catch(err){
        console.error('Middleware error' , err)
    }
}