import LoginForm from "@/compent/LoginForm";

const login=async()=>{
    return(
        <div className="mx-auto max-w-2xl py-10 px-10 sm:px-6 lg:px-8">
            <div className="bg-white shadow-xl rounded-lg p-6 text-center">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}
export default login;