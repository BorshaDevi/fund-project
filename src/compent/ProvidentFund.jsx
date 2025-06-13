'use client'
import { useParams } from "next/navigation";

const ProvidentFund= () => {
    const {id}=useParams();
  console.log("Provident Fund ID:", id);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Provident Fund</h1>
      <p className="text-lg text-gray-700">This page is under construction.</p>
    </div>
  );
}
export default ProvidentFund;
