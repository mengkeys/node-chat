'use strict';
const path = require('path');
const mysql = require(path.join(__dirname, '..', 'lib', 'mysql'));
const resp  = require(path.join(__dirname, '..', 'lib', 'resp'));

exports.list = function(request, reply){
	const user = request.auth.credentials.extend.id;
	return mysql.query('SELECT id, avatar, nickname FROM user_friend WHERE user = ?', user, function(err, friends){
		if(err){
			return reply(resp.error(err));
		}
		return reply(resp.success(friends));
	});
};

exports.details = function(request, reply){
	const user = request.auth.credentials.extend.id;
	const friend = request.query.friend;
};
