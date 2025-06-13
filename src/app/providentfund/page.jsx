import { useParams } from "next/navigation";

const ProvidentFundPage=()=>{
    const {id}=useParams();
    console.log("Provident Fund Page ID:", id);
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-4">Provident Fund Management</h1>
            <p className="text-center mb-8">Manage employee provident fund contributions and withdrawals.</p>
        </div>
    )
}
export default ProvidentFundPage;