import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        uppercase:true,
    },
    lastName:{
        type:String,
        required:true,
        uppercase:true,
    },
    employeeId:{
        type:String,
        required:true,
        unique:true,
    },
    employeeEmail:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    gender:{
        type:String,
        required:true,
    },
    dateOfBirth:{
        type:Date,
        required:true,
    },
    dateOfConfirmation:{
        type:Date,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    basicSalary:{
        type:Number,
        required:true,
    },

})
const Employee= mongoose.models.employee || mongoose.model('employee',employeeSchema);
export default Employee ;