import connectDB from "@/DB/db"
import User from "@/Modals/User"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";
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
