const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/",userController.homePage);

router.get("/list/advert",userController.list_advert);

router.get("/list/advert/:id",userController.view_advert);

router.get("/add/advert",userController.get_addAdvert);

router.post("/add/advert",userController.post_addAdvert);
module.exports = router;