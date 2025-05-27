import UseProfile from "@/compent/UseProfile";
import verifyToken from "@/lib/auth";
import { cookies } from "next/headers";

const page=async()=>{
    const token=(await cookies()).get('token')?.value;
        const user=token?await verifyToken(token):null;
        console.log(user , 'user token ');
        if(!user){
            return;
        }
    return(
        <div>
           <UseProfile user={user}></UseProfile>
        </div>
    )
}
export default page;