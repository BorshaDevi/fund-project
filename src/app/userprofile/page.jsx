
import UserProfile from "@/compent/UserProfile";
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
           <UserProfile user={user}></UserProfile>
        </div>
    )
}
export default page;