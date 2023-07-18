class UserController {
  constructor() {
    this.users = [
      {
        name: "Connie",
        student: "coder",
      },
      {
        name: "Pierre",
        student: "Design Technology",
      },
    ];
  }

  list = (req, res) => {
    console.log("UserRouter called userControll List method");
    res.json({ users: this.users, message: "success" });
  };

  listOne = (req, res) => {
    console.log("UserRouter called userControll ListOne method");
    let user = this.users.filter((x) => x.name === req.params.name);
    res.json({ message: "success", user: user });
  };

  add = (req, res) => {
    console.log("UserRouter called userControll Add method");
    this.users.push({ name: req.body.name, student: req.body.student });
    res.json({ users: this.users, message: "success" });
  };

  listNames = (req, res) => {
    console.log("UserRouter called userControll ListNames method");
    let names = this.users.map((user) => user.name);
    res.json({ users: names, message: "success" });
  };

  edit = (req, res) => {
    console.log(req.params.name);
    let index = this.users.findIndex((x) => x.name === req.params.name);
    console.log(index);
    let newName = req.body.name;
    let newStudent = req.body.student;
    this.users[index] = { name: newName, student: newStudent };
    res.json({
      users: this.users,
      message: "success",
    });
  };

  delete = (req, res) => {
    console.log(req.params.name);
    let index = this.users.findIndex((x) => x.name === req.params.name);
    this.users.splice(index, 1);
    res.json({
      users: this.users,
      message: "success",
    });
  };
}
module.exports = UserController;
