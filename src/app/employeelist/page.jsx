import EmployeeList from "@/compent/EmployeeList";
import verifyToken from "@/lib/auth";
import { cookies } from "next/headers";
import Link from "next/link";



const page=async()=>{
    const token=(await cookies()).get('token')?.value;
        const user=token?await verifyToken(token):null;
        if(!user){
            return;
        }
    return(
        <div className="mx-auto max-w-3xl py-10 min-h-screen  sm:px-6 lg:px-10">
            <div className="bg-white shadow-xl rounded-lg p-6 text-center">
                <div className="flex justify-end">
                    <Link href={'/employee'}><button className="bg-green-800 p-2 text-white rounded-md font-semibold hover:bg-green-400" >Add Employee</button></Link>
                </div>
                <div>Employee List</div>
            <EmployeeList></EmployeeList>
        </div>
        </div>
    )
}
export default page;