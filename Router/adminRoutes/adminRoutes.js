const express = require('express');
const router = express.Router();
const adminController = require("../../Controllers/adminController/adminController")

router.get('/applications',adminController.getApplications);
router.put('/acceptAgent/:id',adminController.acceptAgent);
router.delete('/deleteAgent/:id',adminController.deleteAgent);
router.get('/getAgents',adminController.getAgents);
router.get('/getUsers',adminController.getUsers);
router.delete('/deleteUser/:id',adminController.deleteUser);
module.exports = router;