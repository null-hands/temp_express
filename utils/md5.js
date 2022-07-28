/**
 * md5加密方法定义
 */ 

const crypto = require('crypto'); // crypto加密
const { CRYPTO_SECRET } = require('./constant')

function md5(data) {
  return crypto.createHmac('md5', CRYPTO_SECRET)
  .update(data)
  .digest('hex');
}

module.exports = md5;