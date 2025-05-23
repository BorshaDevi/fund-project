
import verifyToken from "@/lib/auth";
import { cookies } from "next/headers";
import Dashboard from "./Dashboard";


const WarpLayout=async({children})=>{
    const token=(await cookies()).get('token')?.value;
    const user=token?await verifyToken(token):null;
    
    
    return(
        <div className="flex flex-col min-h-screen">
          {user && <Dashboard></Dashboard>}
          <main>
            {children}
          </main>
        </div>
    )
}
export default WarpLayout;