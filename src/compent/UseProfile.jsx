"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";

const UseProfile = async({ user }) => {
  console.log(user, "user profile");
  const {userId , email , name}=user
  // userProfile get
  await axios.get(`/api/useprofile/${userId}`)
  .then(res => {
    console.log(res)
  }).catch(e => {
    console.log(e)
  })

  return (
    <div >
      <h1 className="text-2xl font-bold text-center mt-10">User Profile</h1>
      <div className="max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md text-center">
        <Avatar className='mx-auto'>
          <AvatarImage src="" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
        <p className="text-gray-700 uppercase">Name: {user.name}</p>
      </div>
    </div>
  );
};
export default UseProfile;
// Compare this snippet from src/app/userprofile/page.jsx:
