import verifyToken from "@/lib/auth";
import { cookies } from "next/headers";
import Header from "./Header";
import Dashboard from "./Dashboard";

const WarpLayout=async({children})=>{
    const token=(await cookies()).get('token')?.value;
    const user=token?await verifyToken(token):null;
    return(
        <div>
          {user && <Header></Header>}
          {user&& <Dashboard></Dashboard>}
          {children}
        </div>
    )
}
export default WarpLayout;