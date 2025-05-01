import EmployeeList from "@/compent/EmployeeList";


const page=()=>{
    return(
        <div className="mx-auto max-w-full py-10 min-h-screen px-10 sm:px-6 lg:px-8">
            <div className="bg-white shadow-xl rounded-lg p-6 text-center">
                <div>Header</div>
            <EmployeeList></EmployeeList>
        </div>
        </div>
    )
}
export default page;