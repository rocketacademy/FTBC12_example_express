class UserController {
  constructor(studentModel, studentAddressesModel) {
    this.studentModel = studentModel;
    this.studentAddressesModel = studentAddressesModel;
  }

  list = async (req, res) => {
    console.log("UserRouter called userControll List method");
    let data = await this.studentModel.findAll();
    res.json({ users: data, message: "success" });
  };

  add = async (req, res) => {
    const user = req.body;
    const userDetails = await this.studentModel.create({
      ...user,
    });
    // send back single user
    //   res.json({ users: userDetails, message: "success" });

    let data = await this.studentModel.findAll();
    res.json({ users: data, message: "success" });
  };

  edit = (req, res) => {
    //
  };

  delete = async (req, res) => {
    console.log(req.params.id);
    await this.studentModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    let data = await this.studentModel.findAll();
    res.json({ users: data, message: "success" });
  };
}
module.exports = UserController;
