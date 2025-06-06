"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";
const UserProfile = ({ user }) => {
  const [data, setData] = useState({});
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [resource, setResource] = useState();
  console.log(resource);
  console.log(img, "img");
  console.log(data, "data ");
  const { userId } = user;

  // handleName button 
  const handleName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setName(name);
  };

  // update user data
  let payload = {
      userId:data?.userId,
    };
    if (img) {
      payload.image=img
    }
    if(name){payload.name=name}

    if(img || name){
       const {refetch}=useQuery({
      queryKey: ["updateUser"],
      queryFn: async () => {
        const res = await axios.patch("/api/updateUser", payload);
        console.log(res.data, "update user data");
        return [res.data, refetch];
      },
    })
    }

    
  // userProfile get user data id aways
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`/api/userprofile/${userId}`)
          .then((res) => {
            if (res) {
              console.log(res.data, "frontend userprofile data");
              setData(res.data.user);
              refetch();
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
        <Avatar className="mx-auto bg-whtie border-green-700 border-spacing-4">
          <AvatarImage src={data?.image} />
          <AvatarFallback>Your Image</AvatarFallback>
        </Avatar>

        {/* Image upload Update */}
        <CldUploadWidget
          signatureEndpoint="/api/uploadImage"
          onSuccess={(result, { widget }) => {
            setResource(result?.info);
            setImg(result?.info?.secure_url);
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
          <button className="p-1 font-bold text-white bg-green-500 rounded-md shadow-sm w-14">
            <input type="submit" value="Save" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserProfile;
