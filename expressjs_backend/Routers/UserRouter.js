class UserRouter {
  constructor(userController, express) {
    this.controller = userController;
    this.express = express;
  }

  route = () => {
    let router = this.express.Router();

    router.get("/", this.controller.list);
    router.get("/:name", this.controller.listOne);
    router.post("/", this.controller.add);
    router.get("/usernames", this.controller.listNames);
    router.put("/:name", this.controller.edit);
    router.delete("/:name", this.controller.delete);

    return router;
  };
}

module.exports = UserRouter;
