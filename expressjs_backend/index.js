const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const UserController = require("./Controllers/UserController");
const UserRouter = require("./Routers/UserRouter");

const userController = new UserController();
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
