const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/User.Controller.js");

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);

module.exports = router;
