import Link from "next/link";
import { usePathname } from "next/navigation";

const { Sidebar } = require("./ui/sidebar")

const AppSidebar=()=>{
    const pathname=usePathname()
    return(
        <Sidebar>
            <div>
                <h1 className="text-green-900 font-extrabold text-xl font-serif">Provident Fund</h1>
            </div>
            <div className="mx-auto flex flex-col text-black justify-center items-center mt-10 space-y-5">
            <Link href='/employeelist' className={`link ${pathname=== '/employeelist' ? 'bg-white text-green-600 font-semibold rounded-md shadow p-3 max-w-full':'text-black'}`}  >Employee List</Link>
            <Link href='/userprofile' className={`link ${pathname=== '/userprofile' ? 'bg-white text-green-600 font-semibold rounded-md shadow p-3 max-w-full':'text-black'}`} >User Profile</Link>
            </div>
        </Sidebar>
    )
}
export default AppSidebar;