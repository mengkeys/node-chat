'use strict';
const path = require('path');
const mysql = require(path.join(__dirname, '..', 'lib', 'mysql'));
const resp  = require(path.join(__dirname, '..', 'lib', 'resp'));
const jwt   = require(path.join(__dirname, '..', 'lib', 'jwt'));


exports.login = function(request, reply){
    const phone = request.payload.phone;
    const password = request.payload.password;
    return mysql.query('SELECT id, nickname, avatar FROM user WHERE phone = ? AND password = ? AND status = 1', [phone, password], function(err, result){
        if(err){
            return reply(resp.error(err));
        }
        // 判断
        if(result.length < 1){
            return reply(resp.error(new Error('账号或密码错误')));
        }
        // 登录成功
        return reply(resp.success({
			id: result[0]['id'],
			nickname: result[0]['nickname'],
			avatar: result[0]['avatar'],
			time: new Date(),
			login: true,
            token: jwt.sign({id: result[0]['id'], nickname: result[0]['nickname'], avatar: result[0]['avatar']})
        }));
    });


};

exports.register = function(request, reply){

};

exports.reset = function(request, reply){

};

exports.info  = function(request, reply){
	const user = request.auth.credentials.extend.id;
	return mysql.query('SELECT id, nickname, avatar FROM user WHERE id = ?', user, function(err, list){
		if(err){
			return reply(resp.error(err));
		}
		return reply(resp.success(list[0]));
	});
};

/* 更换头像 */
exports.avatar = function(request, reply){
	const user = request.auth.credentials.extend.id;
	const avatar = request.payload.avatar;
	return mysql.query('UPDATE user SET avatar = ? WHERE id = ?', [avatar, user], function(err, result){
		if(err){
			return reply(resp.error(err));
		}
		if(result.affectedRows > 0){
			return reply(resp.success('修改成功'));
		} else {
			return reply(resp.error(new Error('修改失败')));
		}
	});
};

/* 修改昵称 */
exports.nickname = function(request, reply){
	const user = request.auth.credentials.extend.id;
	const nickname = request.payload.nickname;
	return mysql.query('UPDATE user SET nickname = ? WHERE id = ?', [nickname, user], function(err, result){
		if(err){
			return reply(resp.error(err));
		}
		if(result.affectedRows > 0){
			return reply(resp.success('修改成功'));
		} else {
			return reply(resp.error(new Error('修改失败')));
		}
	});
};
