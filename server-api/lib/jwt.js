'use strict';

const jwt = require('jsonwebtoken');
const path = require('path');
const fs  = require('fs');
// 秘钥证书
const PrivateKey = fs.readFileSync(path.join(__dirname, '..', 'certs', 'app_private_key.pem'));

module.exports = {
    /* 签名 */
    sign: function(data){
        const option = {
            // 签发者
            iss: 'mengkeys.com',
            // 主题
            sub: 'com.mengekys.chat.node',
            // 签发时间
            iat: 30*60*60, // 发行时间
            // 有效时间,必须设置
            //exp: Math.floor(Date.now() / 1000) + (60 * 60),
            // 自定义扩展数据
            extend: data
        };
        return jwt.sign(option, PrivateKey, { algorithm: 'RS256' });
    },
    /* 解析 */
    decode: function(sign){

    }
};
