const userModel = require("../Models/userModel")
const bcrypt = require("bcrypt");


const hash = async (password)=>{
    try{
      return bcrypt.hash(password,10)
    }catch(err){
        console.log(err);
    }
}

// login get
const loginGet = async (req,res)=>{
    res.send("hy")
}

// login Post
const loginPost = (req,res)=>{
    const {names} = req.body
    res.send(names)
}

// signup get
const signupGet = async (req,res)=>{
    res.send("hello")
}

// signup post
const signupPost = async (req,res)=>{
    const {names,email,password,confirm_password} = req.body;   

    

    const existingUser = await userModel.findOne({email:email})
    try{
        if(password !== confirm_password){
           return res.status(400).send({message:"password and confirm password need to be same"})
        }

        if(existingUser){
        return res.status(400).send({message:"user exist"}) 
        }


        const bycryptedPass = await hash(password);
        console.log(bycryptedPass,"hy")

        const newUser = new userModel({
            username:names,
            email:email,
            password:bycryptedPass,
            role:"user"
        })
    
        await newUser.save()
      return  res.status(200).send({message:newUser})

    }
catch(err){
    console.log(err)
}
}



module.exports = {
    loginGet,
    loginPost,
    signupGet,
    signupPost,
}