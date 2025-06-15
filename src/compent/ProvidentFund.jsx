'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

const  ProvidentFund = () => {
    const {id}=useParams();
    console.log("Provident Fund ID:", id);

    // userProfile get user data id aways
  const { data } = useQuery({
    queryKey: ["userProfileFund", id],
    queryFn: async () => {
      const res = await axios.get(`/api/providentfunduser/${id}`);
      console.log(res.data.user, "user data");
      return res.data.user;
    },
    enabled: !!id,
  });
  console.log(data, "Provident Fund  User data");
  return (
    <div className="mx-auto max-w-3xl py-10 min-h-screen  sm:px-6 lg:px-10" >
      <div className="flex flex-col items-center  h-screen bg-green-700">
        <h1 className="text-2xl font-bold mb-4">Provident Fund</h1>
      <p className="text-lg">Name:{data?.firstName} {data?.lastName}</p>
      <p className="text-lg">Designation:{data?.designation} </p>
      <p className="text-lg">EID:{data?.employeeId} </p>
      </div>

    </div>
  );
}
export default ProvidentFund;