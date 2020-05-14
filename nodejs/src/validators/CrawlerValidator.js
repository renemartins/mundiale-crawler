const { body } = require("express-validator");

const crawlerValidationRules = () => {
  return [body("search").isString(), body("limit").isInt()];
};

module.exports = crawlerValidationRules();
