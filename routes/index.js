const express = require("express");
const home_controller = require("../controller/home_controller");
const router = express.Router();

console.log("Router Loaded");

router.get("/", home_controller);

module.exports = router;
