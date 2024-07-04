const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    agencyName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required: true
    },
    confirmPassword:{
        type:String,
    },
    phone:{
        type:Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    verified:{
        type:Boolean,
        default: false,
    },
    
},{timestamps:true})
const agent = mongoose.model("agents",agentSchema);


module.exports = agent