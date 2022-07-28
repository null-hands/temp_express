/**
 * 路由挂载 && 全局异常处理
 */ 

 const express = require('express');
 const { jwtAuth} = require('../utils/jwt'); //jwt登录验证
 const {CODE_ERROR } = require('../utils/constant');
 const router = express.Router();
 
// 引入路由模块
const userRouter = require('./users');

// jwt验证在添加挂载路径之前, 设置jwt白名单需要带上路由模块挂载路径 /api
 router.use(jwtAuth);
 
//  挂载路由模块
 router.use('/api/v1/user', userRouter);
 
 // 异常处理, 作为路由中间件出口，放在最后
 router.use((err, req, res, next) => {
  debugger
  if (err && err.name === 'UnauthorizedError') {
    // token验证失败
    const { status = 401, message = '登录过期，请重新登录' } = err;
    res.status(status).json({
      code: CODE_ERROR,
      message: message,
      data: null
    })
  } else {
    // 错误处理: boom实体类取错误信息
    const { output } = err || {};
    const errCode = (output && output.statusCode) || 500;
    const errMsg = (output && output.payload && output.payload.message) || 'error';
    res.status(errCode).json({
      code: CODE_ERROR,
      message: errMsg,
      data: null
    })
  }
})
 
 module.exports = router;
