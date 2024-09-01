import AppServer from "./app.js";
import Database from "./db.js";

const app = new AppServer();

// const dbConfig = {
//   host: "localhost",
//   user: "root",
//   password: "Acquire@123",
//   database: "nest-app",
// };

// const db = new Database(dbConfig);

// try {
//   db.connect();
//   console.log("Connected to database");

//   // Now you can use the db object to perform queries
//   //const results = await db.query("SELECT * FROM user");
//   //console.log(results);
// } catch (err) {
//   console.error("Error connecting to database:", err);
// }

app.listen();
