const joi = require("joi");
// Place Different schemas Here

exports.signup = joi.object({
  username: joi.string().min(3).max(18).required("Required"),
  email: joi.string().email().required("Required"),
  password: joi.string().min(3).max(10).required("Required"),
});

exports.signin = joi.object({
  username: joi.string().min(3).max(18).required("Required"),
  email: joi.string().email().required("Required"),
  password: joi.string().min(3).max(10).required("Required"),
});
