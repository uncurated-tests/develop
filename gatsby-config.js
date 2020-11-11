require("ts-node").register({
  files: true, // to that TS node hooks have access to local typings too
});

const activeEnv =
  process.env.GATSBY_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = require("./src/gatsby/config");
