import connectDB from "@/DB/db"
import EmployeeList from "@/Modals/EmployeeList"
import { NextResponse } from "next/server"

export async function GET(request){
try{
  await connectDB()
  const employeeList=await EmployeeList.find()
  console.log(employeeList)
  if(employeeList){
     return NextResponse.json({
        message: 'Employee list fetched successfully',
        data: employeeList,
        status: 200
    })
  }
  
}catch(e){
        console.log(e , 'Error in Employee List')
        return NextResponse.json(
            {
                message:'Error in Employee List',
                status:500
            }
        )
    }
}