import mongoose from "mongoose";
const providentFundSchema=new mongoose.Schema({
    employeeId:{
        type:String,
        required:true,
        ref: 'employee',
    },
    year:{
        type:Number,
        required:true,
    },
    month:{
        type:String,
        required:true,
    },
    employeeContribution:{
        type:Number,
        required:true,
    },
    associationContribution:{
        type:Number,
        required:true,
    },
    basicSalary:{
        type:Number,
        required:true,
    },
    totalDeposit:{
        type:Number,
        required:true,
    },

})
const ProvidentFund=mongoose.models.providentFund || mongoose.model('providentfund', providentFundSchema);
export default ProvidentFund;