import EmployeeList from "@/compent/EmployeeList";


const page=()=>{
    return(
        <div className="mx-auto max-w-3xl py-10 min-h-screen  sm:px-6 lg:px-10">
            <div className="bg-white shadow-xl rounded-lg p-6 text-center">
                <div>Employee List</div>
            <EmployeeList></EmployeeList>
        </div>
        </div>
    )
}
export default page;