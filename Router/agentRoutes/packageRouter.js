const express = require("express")
const router = express.Router();
const upload = require("../../Middleware/multer")
const packageController = require("../../Controllers/pakageController/packageController")


// add package
router.get("/packages",packageController.packageGet);
router.post("/addPackage", upload.array('images', 10),packageController.packagePost)

module.exports = router