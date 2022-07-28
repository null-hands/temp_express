/**
 * 数据库连接查询
 * 使用：
 *  const { query, queryOne } = require('../utils/query');
 */
const mysql = require("mysql");
const option = require("../config/dbConfig");

/**
 * 查询所有
 * @param {String} sql
 * @return {Array}
 */
function query(sql, value) {
  let db = mysql.createConnection(option);
  db.connect();
  return new Promise((resolve, reject) => {
    try {
      db.query(sql, value, (err, res) => {
        err ? reject(err) : resolve(res);
      });
    } catch (err) {
      reject(err);
    } finally {
      db.end();
    }
  });
}

/**
 * 查询单条
 * @param {String} sql
 * @return {Object | null}
 */
function queryOne(sql, value) {
  return new Promise((resolve, reject) => {
    query(sql, value)
      .then((res) => {
        res && res.length > 0 ? resolve(res[0]) : resolve(null);
      })
      .catch((err) => reject(err));
  });
}

module.exports = {
  query,
  queryOne,
};
