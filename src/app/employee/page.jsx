import EmployeeForm from "@/compent/EmployeeForm";

const employee=async()=>{
    return(
        <div className="mx-auto max-w-2xl py-10 sm:px-6 lg:px-8">
            <div className="bg-white shadow-xl rounded-lg p-6 text-center">
                <h2 className="text-xl font-bold mb-4">Employee Form</h2>
                <EmployeeForm></EmployeeForm>
            </div>
        </div>
    )
}
export default employee;
