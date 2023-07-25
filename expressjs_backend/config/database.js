require("dotenv").config();
module.exports = {
  development: {
    username: process.env.USERNAME,
    password: null,
    database: process.env.DATABASE,
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
