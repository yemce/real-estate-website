const express = require('express');
const router = express.Router();
const adminController = require("../controller/admin");

router.get("/add/anc",adminController.addAnc);
router.get("/list/anc",adminController.listAnc);

module.exports = router;
