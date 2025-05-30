"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect, useState } from "react";

const UserProfile = ({ user }) => {
  const [data , setData]=useState({})
  console.log(data , 'data ')
  const { userId } = user;
  
  // userProfile get user data id aways
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`/api/userprofile/${userId}`)
          .then((res) => {
            if(res){
              console.log(res.data, "frontend userprofile data");
              setData(res.data.user)
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } catch {
        console.log(e, "From user Profile get data ");
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">User Profile</h1>
      <div className="max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md text-center">
        <Avatar className="mx-auto">
          <AvatarImage src="" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
        <p className="text-gray-700 uppercase">Name: {data?.name}</p>
      </div>
    </div>
  );
};
export default UserProfile;

