import connectDB from "@/DB/db";
import EmployeeList from "@/Modals/EmployeeList";
import { NextResponse } from "next/server";

export async function DELETE(req, {params}){
        const {id}=params;
        console.log(id, "delete employee id");
        try{
           if(!id){
            return NextResponse.json({
                message: "Employee ID is required",
                status: 400,
            })
           }
            await connectDB();
            const result = await  EmployeeList.findByIdAndDelete(id); 
            console.log(result, "delete employee data result");
            if(!result){
                return NextResponse.json({
                    message: "Employee not found",
                    status: 404,
                })
            }
            return NextResponse.json({
                message: "Employee data deleted successfully",
                status: 200,
            })
        }catch(e){
            console.log(e , 'Error from delete employee data server')
            return NextResponse.json({
                message: "Error deleting employee data",
                error: e.message,
                status:500
            })  
        }
}