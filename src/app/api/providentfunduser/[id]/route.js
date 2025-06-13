import connectDB from "@/DB/db";
import Employee from "@/Modals/Employee";
import { NextResponse } from "next/server"; 

export async function GET(req , {params}) {
    const { id } = params;
    console.log("Provident Fund ID:", id);
    try {
        await connectDB();
        const fundUser = await Employee.findOne({ _id: id });
        console.log(fundUser, "Provident Fund user data");

        if (fundUser) {
            return NextResponse.json({
                message: 'Provident Fund user data fetched successfully',
                user: fundUser,
                status: 200
            });
        } else {
            return NextResponse.json({
                message: 'Provident Fund user not found',
                status: 404
            }, { status: 404 });
        }
    } catch (e) {
        console.log(e, "error from get provident fund user data");
        return NextResponse.json({
            message: "Error fetching provident fund user data",
            error: e.message
        }, { status: 500 });
    }
}
