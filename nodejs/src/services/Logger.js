const bunyan = require("bunyan");

class Logger {
  constructor() {
    this.log = bunyan.createLogger({
      name: "Mundiale Crawler",
      src: true,
      streams: [
        {
          path: "./Logs/Logger.log",
        },
      ],
    });
  }
}

module.exports = new Logger().log;
