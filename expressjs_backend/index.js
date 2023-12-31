const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// const pg = require("pg");
// const { Client } = pg;
// const pgConnectionConfigs = {
//   user: process.env.USERNAME,
//   host: "localhost",
//   database: process.env.DATABASE,
//   port: process.env.DB_PORT,
// };
// const client = new Client(pgConnectionConfigs);
// client.connect();

const db = require("./db/models/index");
const { students, student_address } = db;

const UserController = require("./Controllers/UserController");
const UserRouter = require("./Routers/UserRouter");

const userController = new UserController(students, student_address);
const userRouter = new UserRouter(userController, express);
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// application level middle ware  - ALL REQUESTS will go through these
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// testing route to verify if our application runs
app.get("/", (request, response) => {
  response.send("Hello world");
});

// USERS ROUTES
app.use("/users", userRouter.route());

// Error handling Route
app.get("*", (req, res) => {
  res.send("ERROR");
});

app.listen(process.env.PORT, () => {
  console.log(`Application listening to port ${process.env.PORT}`);
});
