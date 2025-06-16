'use client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IoMdDownload } from "react-icons/io";

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
    <div className="mx-auto max-w-6xl py-10 min-h-screen  sm:px-6 lg:px-5" >
      <div className="bg-gradient-to-r from-green-500 to-emerald-300 shadow-xl rounded-lg text-center">
        <div className='flex justify-end gap-10 p-4'>
          <div className="">
                    <Link href={`/providentfundform/${id}`}><button className="bg-green-800 p-2 text-white rounded-md font-semibold hover:bg-white hover:text-black " > Add Provident Fund</button></Link>
                </div>
        <div className="">
                    <Link href={`/providentfundform/${id}`}><button className="bg-green-800 p-2 text-white rounded-md font-semibold hover:bg-green-400 flex" > <IoMdDownload className="mt-1 mr-1" />Download</button></Link>
                </div>
        </div>
      <div className="flex flex-col items-center   h-screen bg-white ">
        <h1 className="text-2xl font-bold mb-4 text-emerald-800">Provident Fund</h1>
      <p className="text-lg">Name:{data?.firstName} {data?.lastName}</p>
      <p className="text-lg">Designation:{data?.designation} </p>
      <p className="text-lg">EID:{data?.employeeId} </p>
      </div>
      {/* list */}
      </div>

    </div>
  );
}
export default ProvidentFund;