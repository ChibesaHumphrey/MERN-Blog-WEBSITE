const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/Auth.Controller.js");
const Validate = require("../Validation/Validator.js");

router.post("/sign-up", Validate.signup, AuthController.signUp);
router.post("/sign-in", Validate.signin, AuthController.signIn);

module.exports = router;
