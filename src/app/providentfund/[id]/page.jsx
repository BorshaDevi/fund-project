import ProvidentFund from "@/compent/ProvidentFund";


const ProvidentFundPage=()=>{
   
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-4">Provident Fund Management</h1>
            <p className="text-center mb-8">Manage employee provident fund contributions and withdrawals.</p>
            <ProvidentFund></ProvidentFund>
        </div>
    )
}
export default ProvidentFundPage;