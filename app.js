require ("dotenv").config();
const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 8989
const userRouter = require("./Router/userRouter")
const cronService = require("./Services/cronService")
const cors = require("cors")

// starts the crone service


// defining session
app.use(session({
   secret:"121",
   resave: false,
   saveUninitialized:false
}))

app.use(bodyParser.json());
app.use(cors())
app.use('/',userRouter);



mongoose.connect(process.env.MONGODB_URI,)
.then(()=> console.log("Database connected"))
.catch((err)=> console.log(err))

// global error handler
app.use((err,req,res,next)=>{
   console.error(err);
   res.status(500).json({message:"Something went wrong"})
})

// Calling the cron service
cronService.init();

app.listen(
 PORT,()=>{
    console.log(`server started running ${PORT}`)
 }
)