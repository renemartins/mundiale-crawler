const cors = require("cors");
const express = require("express");
const routes = require("./routes");

class App {
  constructor() {
    this.server = express();
    this.routes();
  }

  routes() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(routes);
  }
}

module.exports = App;
