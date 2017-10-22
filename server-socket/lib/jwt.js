'use strict';

const jwt = require('jsonwebtoken');
const path = require('path');
const fs  = require('fs');
// 秘钥证书
const PublicKey = fs.readFileSync(path.join(__dirname, '..', 'certs', 'app_public_key.pem'));

module.exports = {
    /* 解析 */
    decode: function(token){
    	console.log(token);
		return jwt.verify(token, PublicKey, { algorithms: ['RS256'] })
    }
};
