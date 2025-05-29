"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect } from "react";

const UserProfile = ({ user }) => {
  // console.log(user, "user profile");
  const {userId , email , name}=user
  // userProfile get
  useEffect(async()=>{
    const getUserData=await axios.get(`/api/userprofile/${userId}`)
  .then(res => {
    console.log(res.data , 'frontend userprofile data')
  }).catch(e => {
    console.log(e)
  })
  }, [userId])
  

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
export default UserProfile;
// Compare this snippet from src/app/userprofile/page.jsx:
