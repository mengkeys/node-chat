'use strict';
const path = require('path');
const mysql = require(path.join(__dirname, '..', 'lib', 'mysql'));
const resp  = require(path.join(__dirname, '..', 'lib', 'resp'));
const async = require('async');

exports.list = function(request, reply){
	const user = request.auth.credentials.extend.id;
	return mysql.query('SELECT id, nickname, avatar FROM group WHERE id IN(SELECT group FROM group_user WHERE user = ?)', user, function(err, groups){
		if(err){
			return reply(resp.error(err));
		}
		return reply(resp.success(groups));
	});
};

exports.details = function(request, reply){
	/* 需要获取群的基本信息以及群成员列表,以及本人对群的设置 */
	const user  = request.auth.credentials.extend.id;
	const group = request.query.group;
	return async.parallel({
		basic: function(cb){
			return mysql.query('SELECT id, nickname, avatar FROM group WHERE id = ?', group, function(err, result){
				if(err){
					return cb(err);
				}
				if(result.length < 1){
					return cb(null, {});
				}
				return cb(null, result[0]);
			});
		},
		users: function(cb){
			return mysql.query('SELECT id, nickname, avatar FROM user WHERE id IN(SELECT user FROM group_user WHERE group = ?) ORDER BY created DESC', group, function(err, list){
				if(err){
					return cb(err);
				}
				return cb(null, list);
			});
		},
		setting:function(cb){
			return mysql.query('SELECT * FROM group_user WHERE user = ?', user, function(err, result){
				if(err){
					return cb(err);
				}
				if(result.length < 1){
					return cb(null, {});
				}

				return cb(null, result[0]);
			});
		}
	}, function(err, results){
		if(err){
			return reply(resp.error(err));
		}
		return reply(resp.success({
			basic: results.basic,
			users: results.users,
			setting: results.setting
		}));
	});
};
