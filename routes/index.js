const express = require("express");
const home_controller = require("../controller/home_controller");
// const user_controller = require("../controller/user_controller");
const router = express.Router();

console.log("Router Loaded");
router.get("/", home_controller);
// router.get("/user", user_controller);

module.exports = router;
