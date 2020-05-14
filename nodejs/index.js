require("dotenv/config");
const App = require("./src/app");

const { server } = new App();

server.listen(process.env.PORT, () =>
  console.log(
    `Desafio - Crawler Mundiale app listening on port ${process.env.PORT}!`
  )
);
