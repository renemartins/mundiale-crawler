const { Router } = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("../swagger.json");
const validate = require("./services/validate");
const crawlerValidationRules = require("./validators/CrawlerValidator");

const CrawlerController = require("./controllers/CrawlerController");

const routes = new Router();

routes.post(
  "/search",
  crawlerValidationRules,
  validate,
  CrawlerController.create
);

routes.use("/docs", swaggerUi.serve);
routes.get("/docs", swaggerUi.setup(swaggerOptions));

module.exports = routes;
