/**
 * 用户相关业务
 */

const { query, queryOne } = require("../utils/query");
const md5 = require("../utils/md5");
const jwt = require("jsonwebtoken");
const boom = require("boom");
const { validationResult } = require("express-validator");
const {
  CODE_ERROR,
  CODE_SUCCESS,
  PRIVATE_KEY,
  JWT_EXPIRED,
} = require("../utils/constant");

// 注册
function register(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    const [{ msg }] = err.errors;
    next(boom.badData(msg));
  } else {
    let { mobile, pwd } = req.body;
    let sql = `select * from user where mobile = ?`;
    query(sql, [mobile]).then((data) => {
      if (data.length) {
        res.json({
          code: CODE_ERROR,
          msg: "用户已存在",
          data: null,
        });
      } else {
        pwd = md5(pwd);
        let sql = `insert into user(mobile, pwd) values(?, ?)`;
        query(sql, [mobile, pwd]).then((result) => {
          let fail = !result || result.length === 0;
          res.json({
            code: fail ? CODE_ERROR : CODE_SUCCESS,
            msg: fail ? "注册失败" : "注册成功",
            data: null,
          });
        });
      }
    });
  }
}

// 登录
function login(req, res, next) {
  // 参数验证结果处理
  const err = validationResult(req);
  if (!err.isEmpty()) {
    const [{ msg }] = err.errors;
    next(boom.badData(msg)); //全局错误处理函数处理
  } else {
    let { mobile, pwd } = req.query;
    // md5加密
    pwd = md5(pwd);
    const sql = `select * from user where mobile=? and pwd=?`;
    queryOne(sql, [mobile, pwd]).then((user) => {
      if (!user || user.length === 0) {
        res.json({
          code: CODE_ERROR,
          msg: "用户未注册或密码错误",
          data: null,
        });
      } else {
        // 登录成功，签发一个token并返回
        const token = jwt.sign(
          { id: user.id, loginTime: new Date() },
          PRIVATE_KEY,
          { expiresIn: JWT_EXPIRED }
        );
        res.json({
          code: CODE_SUCCESS,
          msg: "登录成功",
          data: {
            token,
            user,
          },
        });
      }
    });
  }
}

// 重置密码
function resetPwd(req, res, next) {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    const [{ msg }] = err.errors;
    next(boom.badData(msg));
  } else {
    let { mobild, pwd, newPwd } = req.body;
    pwd = md5(pwd);
    let sql = "select id from user where mobile=? and pwd=?";
    queryOne(sql, [mobild, pwd]).then((user) => {
      if (user) {
        newPwd = md5(newPwd);
        let sql = "update user set pwd=? where mobile=?";
        query(sql, [newPwd, mobile]).then((result) => {
          res.json({
            code: result ? CODE_SUCCESS : CODE_ERROR,
            msg: result ? "重置成功" : "重置失败",
            data: null,
          });
        });
      } else {
        res.json({
          code: CODE_ERROR,
          msg: "重置密码失败",
          data: null,
        });
      }
    });
  }
}

module.exports = {
  login,
  register,
  resetPwd,
};
