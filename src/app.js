import express from "express";
import bodyParser from "body-parser";

const PORT = 4000;
class AppServer {
  constructor() {
    this.app = express();
    this.init();
    this.routes();
    this.middleware();
  }
  async init() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: "50mb" }));
  }

  async testDB(db) {
    // try {
    //   const results = await db.query("SELECT * FROM user");
    //   console.log("results: ", results);
    // } catch (err) {
    //   console.error(err);
    // }
  }
  middleware() {
    //   authRouter
    //     .route("/register")
    //     .post(
    //       sanitize(),
    //       /* validateBody(schemas.registerSchema), */ authController.addUser
    //     );
  }

  async routes() {
    this.app.get("/", (req, res) => {
      res.json({ message: "Welcome to Node MVC" });
    });
    this.app.post("/", (req, res) => {
      console.log("req: ", req.body);
    });
  }

  async listen() {
    this.app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
  }
}

export default AppServer;
