import connectDB from "@/DB/db";
import User from "@/Modals/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        await connectDB()
        const {name,email,password}=await request.json()
    const user=await User.findOne({email})
    if(user){
        return NextResponse.json(
            {
                message:'User already exists',
                status:400
            }
        )
    }
    const passwordHash=await bcrypt.hash(password,10)
    const newUser=new User({
        name,email, password:passwordHash
    })
    await newUser.save()
    if(newUser){
        return NextResponse.json(
            {
                message:'User created successfully',
                status:200
            }
        )}
    }catch(e){
        console.log(e , 'Error in creating user')
        return NextResponse.json(
            {
                message:'Error in creating user',
                status:500
            }
        )
    }

}