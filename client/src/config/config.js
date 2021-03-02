require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "bean_feeder",
    host: "127.0.0.1",
    dialect: "mongo",
  },
  test: {
    username: "root",
    password: "!",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mongo",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mongo",
  },
};
