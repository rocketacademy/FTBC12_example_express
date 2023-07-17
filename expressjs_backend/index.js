const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();

const users = [
  {
    name: "Connie",
    student: "coder",
  },
  {
    name: "Pierre",
    student: "Design Technology",
  },
];

// application level middle ware  - ALL REQUESTS will go through these
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route level middleware / Route handlers
app.get("/", (req, res, next) => {
  console.log(req);
  next();
});

app.post("/users", (req, res, next) => {
  console.log(req.body);
  next();
});

app.get("/", (request, response) => {
  // console.log("request", request);
  // console.log("response", response);
  response.send(["Hello", "world", 99]);
  // response.json({ messsage: "hello world" });
});

app.get("/users", (req, res) => {
  res.json({ users: users });
});

app.get("/users/:name", (req, res) => {
  let user = users.filter((x) => x.name === req.params.name);
  res.json({ message: "success", data: user });
});

app.post("/users", (req, res) => {
  users.push({ name: req.body.name, student: req.body.student });
  res.json({ data: users, message: "success" });
});

app.get("/usernames", (req, res) => {
  let names = users.map((user) => user.name);
  res.json({ data: names, message: "success" });
});

app.listen(process.env.PORT, () => {
  console.log(`Application listening to port ${process.env.PORT}`);
});
