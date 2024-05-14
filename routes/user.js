const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/",userController.homePage);

router.get("/list/advert",userController.list_advert);

router.get("/list/advert/:id",userController.view_advert);

router.get("/add/advert",userController.add_advert);


module.exports = router;