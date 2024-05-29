const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
    },
    role: {
        type:String,
        required:true,
    }
});

const user = mongoose.model("users",userSchema);

module.exports = user;