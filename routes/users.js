/**
 * 用户模块路由
 */
var express = require("express");
var router = express.Router();
const service = require("../services/userService");
const { query, body } = require("express-validator");

// 注册
router.post(
  "/register",
  [body("mobile").isMobilePhone(), body("pwd").isLength({ min: 6, max: 12 })],
  service.register
);

// 登录
router.get(
  "/login",
  [query("mobile").isMobilePhone(), query("pwd").isLength({ min: 6, max: 12 })],
  service.login
);

// 重置密码
router.post(
  "/resetPwd",
  [
    body("mobile").isMobilePhone(),
    body("pwd").isLength({ min: 6, max: 12 }),
    body("newPwd").isLength({ min: 6, max: 12 }).not().equals(body("pwd")),
  ],
  service.login
);

module.exports = router;
