const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/User.Controller.js");
const { verifyToken } = require("../Utils/VerifyUser.js");

router.get("/test", UserController.test);
router.put("/update/:userId", verifyToken, UserController.updateUser);
router.delete("/delete/:userId", verifyToken, UserController.deleteUser);
router.post("/sign-out", UserController.signOut);
router.get("/get-users", verifyToken, UserController.getUsers);
router.get("/:userId", UserController.getUser);

module.exports = router;
