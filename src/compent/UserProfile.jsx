"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
const UserProfile = ({ user }) => {
  const queryClient = useQueryClient();
  const [resource, setResource] = useState();
  console.log(resource);
  const { userId } = user;

  // handleName button
  const handleName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const payload = {
      userId: userId,
      name: name,
    };
    userProfileUpdate.mutate(payload);
  };

  // userProfile get user data id aways
  const { data } = useQuery({
    queryKey: ["userProfile", userId],
    queryFn: async () => {
      const res = await axios.get(`/api/userprofile/${userId}`);
      console.log(res.data.user, "user data");
      return res.data.user;
    },
    enabled: !!userId,
  });

  // update user data
  const userProfileUpdate = useMutation({
    mutationFn: async (payload) => {
      const res = await axios.patch("/api/updateUser", payload);
      console.log(res.data, "update user data");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userProfile", userId]);
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">User Profile</h1>
      <div className="max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md text-center">
        <Avatar className="mx-auto bg-whtie border-green-700 border-spacing-4">
          <AvatarImage src={data?.image} />
          <AvatarFallback>Your Image</AvatarFallback>
        </Avatar>

        {/* Image upload Update */}
        <CldUploadWidget
          signatureEndpoint="/api/uploadImage"
          onSuccess={(result, { widget }) => {
            setResource(result?.info);
            const payload = {
              userId: userId,
              image: result?.info?.secure_url,
            };
            userProfileUpdate.mutate(payload);
          }}
          onQueuesEnd={(result, { widget }) => {
            widget.close();
          }}
        >
          {({ open }) => {
            function handleOnClick() {
              setResource(undefined);
              open();
            }
            return (
              <button
                onClick={handleOnClick}
                className="bg-green-600 rounded-md p-2 "
              >
                Upload your Image
              </button>
            );
          }}
        </CldUploadWidget>

        {/* Name Update */}
        <form onSubmit={handleName} className="mt-5 mb-5">
          <input
            type="text"
            name="name"
            className="border-b border-green-300 w-full outline-none focus:outline-none py-4 bg-transparent my-4 text-black uppercase font-semibold "
            defaultValue={data?.name}
            placeholder="Your name"
          />
          <br></br>
          <input
            type="submit"
            className="p-1 font-bold text-white bg-green-500 rounded-md shadow-sm w-14"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};
export default UserProfile;
