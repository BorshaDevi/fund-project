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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Provident Fund</h1>
      <p className="text-lg">This is the Provident Fund page.</p>
    </div>
  );
}
export default ProvidentFund;