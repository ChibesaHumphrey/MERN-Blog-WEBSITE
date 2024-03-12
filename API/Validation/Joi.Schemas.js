const joi = require("joi");
// Place Different schemas Here

exports.signup = joi.object({
  username: joi.string().min(3).max(18).required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).max(10).required(),
});

exports.signin = joi.object({
  username: joi.string().min(3).max(18).required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).max(10).required(),
});
