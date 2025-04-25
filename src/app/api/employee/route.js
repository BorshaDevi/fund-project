import  connectDB from "@/DB/db"
import Employee from "@/Modals/Employee"
import { NextResponse } from "next/server"

export async function POST(request){
    try{
        const data=await request.json()
        const {employeeEmail}=data
        await connectDB()
        const employee=await Employee.findOne({employeeEmail})
        if(employee){
            return NextResponse.json({
                message:'This Employee already here!'
            })
        }
        const employeeAdd=Employee.create(data)
        if(employeeAdd){
            return NextResponse.json({
                message: 'Employee added successfully',
                status:200
            })
        }
    }catch(err){
        return NextResponse.json(
            {
                message:'Error in employee route',
                status:500
            }
        )
    }

}