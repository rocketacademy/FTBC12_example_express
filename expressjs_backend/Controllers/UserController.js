class UserController {
  constructor(client) {
    this.client = client;
  }

  list = (req, res) => {
    console.log("UserRouter called userControll List method");

    this.client.query("SELECT * FROM students;", (error, result) => {
      if (error) {
        console.log(error);
      }

      res.json({ users: result.rows, message: "success" });
    });
  };

  add = async (req, res) => {
    const user = req.body;

    await this.client.query(
      `INSERT INTO students (first_name, last_name, age, current_course) VALUES ('${user.first_name}', '${user.last_name}', '${user.age}', '${user.current_course}');`
    );

    let data = await this.client.query("SELECT * FROM students;");
    console.log("real data to use:", data);
    console.log(data.rows);

    res.json({ users: data.rows, message: "success" });
  };

  edit = (req, res) => {
    //
  };

  delete = async (req, res) => {
    console.log(req.params.id);

    await this.client.query(
      `DELETE FROM students WHERE id = '${req.params.id}'`
    );

    let data = await this.client.query("SELECT * FROM students;");
    console.log("real data to use:", data);
    console.log(data.rows);

    res.json({ users: data.rows, message: "success" });
  };
}
module.exports = UserController;
