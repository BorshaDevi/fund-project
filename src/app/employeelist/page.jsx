const { default: EmployeeList } = require("@/compent/EmployeeList")

const page=()=>{
    return(
        <div className="mx-auto max-w-2xl py-10 px-10 sm:px-6 lg:px-8">
            <div className="bg-white shadow-xl rounded-lg p-6 text-center">
            <EmployeeList></EmployeeList>
        </div>
        </div>
    )
}
export default page;