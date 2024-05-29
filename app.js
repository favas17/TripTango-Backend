require ("dotenv").config();
const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 8989
const userRouter = require("./Router/userRouter")

app.use(bodyParser.json());
app.use('/',userRouter);

mongoose.connect(process.env.MONGODB_URI,)
.then(()=> console.log("Database connected"))
.catch((err)=> console.log(err))

app.listen(
 PORT,()=>{
    console.log(`server started running ${PORT}`)
 }
)