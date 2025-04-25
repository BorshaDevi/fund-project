import RegisterForm from "@/compent/RegisterForm";

const register=async()=>{
    return(
        <div className="mx-auto max-w-2xl py-10 px-10 sm:px-6 lg:px-8">
            <div className="bg-white shadow-xl rounded-lg p-6 text-center">
                <h2 className="text-xl font-bold mb-4">Register</h2>
                <RegisterForm></RegisterForm>
            </div>
        </div>
    )
}
export default register;
