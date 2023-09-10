const express = require("express");
const router = express.Router();
const homeController = require("../controller/home_controller");
const userController = require("../controller/user_controller");
const user = require("../controller/user_controller");
console.log("Router Loaded");
router.get("/", homeController);
router.get("/user", userController);
module.exports = router;
