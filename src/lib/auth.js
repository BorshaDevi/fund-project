import  { jwtVerify } from 'jose'
export default async function verifyToken(token){
    if(!token){
        return null;
    }
try{
      const secret=new TextEncoder().encode(process.env.JWT_SECRET)
      const{payload}=await jwtVerify(token,secret)
      return {
        userId:payload.userId,
        email:payload.email,
        name:payload.name,
      }
}catch(err){
    console.log(err)
}
}