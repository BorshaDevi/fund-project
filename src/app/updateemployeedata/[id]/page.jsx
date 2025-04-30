import UpdateEmployeeData from "@/compent/UpdateEmployeeData";

const updateemployeedata=async()=>{
    return(
        <div className="mx-auto max-w-2xl  sm:px-6 lg:px-8">
            <div className="bg-white shadow-xl rounded-lg p-6 text-center">
                <h2 className="text-xl font-bold mb-4">Update Employee Data Form</h2>
               <UpdateEmployeeData></UpdateEmployeeData>
            </div>
        </div>
    )
}
export default updateemployeedata;