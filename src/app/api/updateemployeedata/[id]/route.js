import EmployeeList from "@/Modals/EmployeeList"
import { NextResponse } from "next/server"
import { ObjectId } from "mongodb";
import connectDB from "@/DB/db";
export async function PUT(request ,{params}) {
    try{
          await connectDB()
          const req=await request.json()
          const id=params.id
          const Id=new ObjectId(id)
          console.log(req , 'server update')
          const update=await EmployeeList.updateOne({_id : Id}, {$set:req})
          if(update.modifiedCount > 0){
               return NextResponse.json({
                  message: 'Update Employee list Data successfully',
                  data:update,
                  status: 200
              })
            }else {
      return NextResponse.json({
        message: "No update was made. Either the employee doesn't exist or data is the same.",
        status: 404,
      }, { status: 404 });
    }
            
    }catch(error){
        console.log(error, 'Error in Id ways Employee data Update ')
                         return NextResponse.json(
                             {
                                 message:'Error in Id ways Employee data Update',
                                 status:500
                             }
                         )
    }
    
}