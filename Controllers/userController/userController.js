const userModel = require("../../Models/userModel")
const bcrypt = require("bcrypt");
const sendMail = require("../../Utils/nodeMailer")

// genarates otp of 4 numbers



const hash = async (password)=>{
    try{
      return bcrypt.hash(password,10)
    }catch(error){
        next(error)
    }
}

// login get
const loginGet = async (req,res)=>{
    res.send("hy")
}

// login Post
const loginPost = async (req,res,next)=>{
    // destructuring the email and password
    const {email,password} = req.body
    
    // checks any field is empty
    if(email == "" || password == ""){
        return res.status(400).json({message:"Please fill the field correctly"})
    }

    try {
        // check the user doc is in db by checking with the email
        const userExist = await userModel.findOne({email:email})

        // if user not exist
        if(!userExist){
            return res.status(400).json({message:"Email don't exist"}) 
          }

        //   if user exist checks the password using bcrypt compare
        const passwordMatch = await bcrypt.compare(password,userExist.password)

        // if the password is incorrect
        if(!passwordMatch){
            return res.status(401).json({message:"Incorrect Password"})
        }


        // when everything is ok
        return res.status(200).json({message:"Log in success"})

    } catch (error) {
        next(error)
    }
}



// signup get
const signupGet = async (req,res)=>{
    res.send("hello")
}

// signup post
const signupPost = async (req,res,next)=>{


    // destructure all the values
    const {username,email,password,confirm_password} = req.body;   

    // checks if any fields value is empty
    if(username=="" || email=="" || password=="" || confirm_password==""){
        // if empty sends a message to frontend
        return res.status(400).json({message:"please fill all the fields"})
    }

    // checks the password and confirm password value is same
    if(password !== confirm_password){
        return res.status(400).json({message:"password and confirm password need to be same"})
     }



    // find any document db matches the email 
    const existingUser = await userModel.findOne({email:email})
    try{
        
        // if matches send user exist
        if(existingUser){
        return res.status(400).json({message:"User already exist!"}) 
        }
       
    
        // bycrypting password
        const bycryptedPass = await hash(password);

        // create  new userModel
        const newUser = new userModel({
            username:username,
            email:email,
            password:bycryptedPass,
            role:"user",
        })

        // saves the new new user details
        await newUser.save()

        res.status(201).json({success:true,
            message:"User created and otp sended succesfully"});
            
        // genarating otp
        const GenarateOtp = Math.floor(1000+Math.random()*9000);
        // saving otp to session
        req.session.otp = GenarateOtp   
        
        // send the otp and email to node mailer for sending the mail
        await sendMail(email,GenarateOtp);
        
        

    }
catch(errors){
    next(errors)
}
}

// otp page
const otpGet = async (req,res)=>{
    const otp = req.session.otp 
}

// otp verification post 
const otpPost = async (req,res)=>{
    const {otp} = req.body
    console.log(otp)
}


module.exports = {
    loginGet,
    loginPost,
    signupGet,
    signupPost,
    otpGet,
    otpPost,
}