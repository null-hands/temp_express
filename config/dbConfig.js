/**
 * 数据库连接配置
 */

// const mysql = require("mysql");
//设置连接配置
// const connection = mysql.createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "PLAYMYSQL",
//   database: "vue2",
//   connectTimeout: 5000,
//   connectLimit: 200
// });
const option = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "PLAYMYSQL",
  database: "vue2",
  connectTimeout: 5000,
  connectLimit: 200
};

module.exports = option;
