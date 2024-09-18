const express = require("express");
const router = express.Router();
const userController = require("../../Controllers/userController/userController.js")

// login get
router.get("/",userController.loginGet);
// login Post
router.post("/",userController.loginPost)
// signup get
router.get("/signup",userController.signupGet)
// signup post
router.post("/signup",userController.signupPost)
// OTP verification page
router.get('/otpVerify',userController.otpGet)
// OTP verification post
router.post("/otpverify",userController.otpPost)
// razorpay order creating
router.post("/createOrder",userController.createOrder);
// verifiying payment
router.post("/verifyPayment",userController.verifyPayment);

module.exports = router