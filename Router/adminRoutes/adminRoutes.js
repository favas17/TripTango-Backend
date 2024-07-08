const express = require('express');
const router = express.Router();
const adminController = require("../../Controllers/adminController/adminController")

router.get('/applications',adminController.getApplications);
router.put('/acceptAgent/:id',adminController.acceptAgent);
module.exports = router;