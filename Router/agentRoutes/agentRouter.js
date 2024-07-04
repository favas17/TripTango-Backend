const express = require("express");
const router = express.Router();
const upload = require("../../Middleware/multer");
const agentController = require("../../Controllers/agentController/agentController.js");

// Package section
router.get("/packages", agentController.packageGet);
router.get("/packages/:id", agentController.packageById);
router.post("/addPackage", upload.array('images', 10), agentController.packagePost);

// Agent Signup
router.post("/agentSignup",agentController.signupPost);
module.exports = router;
