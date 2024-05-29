const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController")

// login get
router.get("/",userController.loginGet);
// login Post
router.post("/",userController.loginPost)
// signup get
router.get("/signup",userController.signupGet)
// signup post
router.post("/signup",userController.signupPost)

module.exports = router