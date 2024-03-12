const joi = require("joi");
const schemaFor = require("../Validation/Joi.Schemas");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const validateSignup = validator(schemaFor.signup);
const validateSignin = validator(schemaFor.signin);

// Exporting Different Validation middlewares based on its schema
exports.signup = (req, res, next) => {
  const { error, value } = validateSignup(req.body);
  if (error) return res.send(error.message);
  next();
};

exports.signin = (req, res, next) => {
  const { error, value } = validateSignin(req.body);
  if (error) return res.send(error.message);
  next();
};
