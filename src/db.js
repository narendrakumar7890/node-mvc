//const mysql = require("mysql2");
import mysql from "mysql2";
class Database {
  // constructor(config) {
  //   console.log("config: ", config);
  //   this.pool = mysql.createPool(config);
  //   //console.log("this.pool: ", this.pool);
  // }

  // query(sql, values) {
  //   return new Promise((resolve, reject) => {
  //     this.pool.getConnection((err, connection) => {
  //       if (err) {
  //         reject(err);
  //         return;
  //       }

  //       connection.query(sql, values, (err, results) => {
  //         connection.release(); // Release the connection back to the pool

  //         if (err) {
  //           reject(err);
  //           return;
  //         }

  //         resolve(results);
  //       });
  //     });
  //   });
  // }
  constructor(config) {
    this.dbConfig = config;
    this.establishedConnection = null;
    this.connection = mysql.createConnection(this.dbConfig);
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.connection.connect((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  query(sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  dropConnection() {
    if (this.establishedConnection) {
      this.establishedConnection.then((res) => {
        res.end();
        console.log(res.state, "connection dropped");
      });

      this.establishedConnection = null;
    }
  }
}

export default Database;
