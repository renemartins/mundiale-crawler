const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const errList = [];
  errors.array().map((err) => errList.push({ [err.param]: err.msg }));

  return res.status(400).json({
    errors: errList,
  });
};

module.exports = validate;
