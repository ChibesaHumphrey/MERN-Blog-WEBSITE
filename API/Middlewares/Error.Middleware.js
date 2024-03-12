const createError = require("http-errors");
exports.pageNotFound = (req, res, next) => {
  next(createError(404, "Page Not Found ..."));
};
