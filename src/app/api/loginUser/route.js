import connectDB from "@/DB/db"
import User from "@/Modals/User"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
export async function POST(request){
        try{
           await connectDB()
           const {email,password}=await request.json()
           const user=await User.findOne({email}).select('+password')
           if(!user){
                return NextResponse.json(
                     {
                          message:'User not found',
                          status:400
                     }
                )
           }
              const isMatch=await bcrypt.compare(password,user.password)
              if(!isMatch){
                   return NextResponse.json(
                        {
                             message:'Invalid credentials',
                             status:400
                        }
                   )
              }
              //token creation
              const secret=new TextEncoder().encode(process.env.JWT_SECRET)
              const alg='HS256'
              const jwt=await new SignJWT({
               email:user.email,
               userId:user._id.toString(),
               name:user.name,
          })
              .setProtectedHeader({ alg })
              .setIssuedAt()
              .setExpirationTime('2h')
              .sign(secret)
               console.log(jwt)
               if(jwt){
                    (await cookies()).set('token',jwt,{
                         httpOnly:true,
                         path:'/',
                         maxAge:7200,
                         secure:process.env.NODE_ENV === 'production',
                         sameSite:'strict',
                    })
               }
              return NextResponse.json(
                { message: "Login successful" },
                { status: 200 }
              );

        }catch{
            console.log('Error in login page')
            return NextResponse.json(
                {
                    message:'Error in login page',
                    status:500
                }
            )
        }
}
