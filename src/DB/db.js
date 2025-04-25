import mongoose from 'mongoose'
const connectDB=async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL)
         console.log('connected to db')
    }catch{(err)=>{
        console.log(err.message , 'error connecting to db')
    }}
}
export default connectDB;