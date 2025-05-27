'use client';
const UseProfile=({user})=>{
    console.log(user, 'user profile');
    return(
        <div>
             <h1 className="text-2xl font-bold text-center mt-10">User Profile</h1>
            <div className="max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md">
                <img src='' alt='user Profile' className="text-center rounded border-green-600"></img>
                <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
                <p className="text-gray-700 uppercase">Name: {user.name}</p>
               
        </div>
        </div>
    )
}
export default UseProfile;
// Compare this snippet from src/app/userprofile/page.jsx: