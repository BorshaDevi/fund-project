import Link from "next/link";

const { Sidebar } = require("./ui/sidebar")

const AppSidebar=()=>{
    return(
        <Sidebar>
            <div>
                <h1 className="text-green-900 font-extrabold text-xl font-serif">Provident Fund</h1>
            </div>
            <div className="mx-auto flex flex-col text-black justify-center items-center mt-10 space-y-5">
            <Link href=''  >Employee List</Link>
            <Link href=''  >User Profile</Link>
            </div>
        </Sidebar>
    )
}
export default AppSidebar;