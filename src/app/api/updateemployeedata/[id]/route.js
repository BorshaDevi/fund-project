import EmployeeList from "@/Modals/EmployeeList"
import { NextResponse } from "next/server"
import { ObjectId } from "mongodb";
export async function PUT(request ,{params}) {
    try{
          const req=await request.json()
          const id= params.id
          const Id=new ObjectId(id)
          console.log(req , 'server update')
          const update=await EmployeeList.updateMany({_id : Id}, req)
          if(update.modifiedCount > 0){
               return NextResponse.json({
                  message: 'Update Employee list Data successfully',
                  status: 200
              })
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