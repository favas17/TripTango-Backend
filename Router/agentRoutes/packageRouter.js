const express = require("express");
const router = express.Router();
const upload = require("../../Middleware/multer");
const packageController = require("../../Controllers/packageController/packageController");

router.get("/packages", packageController.packageGet);
router.get("/packages/:id", packageController.packageById);
router.post("/addPackage", upload.array('images', 10), packageController.packagePost);

module.exports = router;
