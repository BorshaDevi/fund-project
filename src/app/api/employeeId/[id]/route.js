import connectDB from "@/DB/db"
import EmployeeList from "@/Modals/EmployeeList"
import { NextResponse } from "next/server"
import { ObjectId } from "mongodb";
export async function GET(request , {params}){
    try{
         await connectDB()
         const Id=await params.id
         const idEmployee=await EmployeeList.findOne({_id:Id})
         console.log(idEmployee)
           if(idEmployee){
              return NextResponse.json({
                 message: 'Employee list fetched successfully',
                 data: idEmployee,
                 status: 200
             })
           }
           
    }catch(error){
         console.log(error, 'Error in Id ways Employee data ')
                 return NextResponse.json(
                     {
                         message:'Error in Id ways Employee data ',
                         status:500
                     }
                 )
    }
}