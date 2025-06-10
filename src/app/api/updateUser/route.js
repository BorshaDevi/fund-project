import connectDB from "@/DB/db";
import User from "@/Modals/User";
import { NextResponse } from "next/server";

export async function PATCH(req){
     const userData=await req.json();
     const {userId, name , image}=userData;
     console.log(userData, "user data from patch");
     try{
         let updateData={};
         if(name) updateData.name=name;
         if(image)updateData.image=image; 
         if(Object.keys(updateData).length === 0){
            return NextResponse.json({
                message: "No data to update",
                status: 400
            }, { status: 400 });
         }
           await connectDB();
           const result=await User.findOneAndUpdate({_id:userId}, updateData , {
            new:true,
            runValidators: true
           })
           if(result){
                return NextResponse.json({
                     message: "User data updated successfully",
                }, { status: 200 });
           }
           else{
                    return NextResponse.json({
                         message: "User not found",
                         status: 404
                    }, { status: 404 });
           }
           
     }catch(e){
        console.log(e, "error from patch user data");
        return NextResponse.json({
            message: "Error updating user data",
            error: e.message
        }, { status: 500 });
     }
}