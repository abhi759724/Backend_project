const express = require("express");
const router = express.Router();

const homeController = require("../controller/home_controller");

console.log("Router Loaded");

router.get("/", homeController);

router.use("/users", require("./users"));
router.use("/users", require("./contact"));

module.exports = router;
