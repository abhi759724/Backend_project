const express = require("express");

const router = express.Router();
const usersController = require("../controller/user_controller");

router.get("/profile", usersController);

module.exports = router;
