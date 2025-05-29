import connectDB from "@/DB/db";
import User from "@/Modals/User";
import { NextResponse } from "next/server";

export async function GET (req, {params}) {
    try{
        await connectDB()
    const {userId}=params
    const user=await User.findOne(userId)
    console.log(user , 'id by user data get')
    if(user){
        return NextResponse.json({
            message: 'User found',
            status: 200,
            user
        })
    }
    }catch (e) {
         console.log(e , 'Error in Employee List')
                 return NextResponse.json(
                     {
                         message:'UserProfile data error',
                         status:500
                     }
                 )
    }
}