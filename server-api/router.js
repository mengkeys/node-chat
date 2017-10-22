'use strict';

const path = require('path');
const joi  = require('joi');
const controller = require(path.join(__dirname, 'controller'));
module.exports = [
    {
        method: 'POST',
        path: '/common/verify/code',
        handler: controller.commons.verifyCode,
        config:{
            auth: false,
            description: '获取验证码',
            tags: ['api', 'commons'],
            validate: {
                payload: joi.object().keys({
                    phone:joi.string().length(11).required().description('手机号码')
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/common/upload/token',
        handler: controller.commons.uploadToken,
        config: {
            auth: false,
            description: '获取资源上传签名',
            tags: ['api', 'commons'],
            validate: {
                /* TODO 此处可根据自身需要设置payload参数,并进行相应的校验处理 */
            }
        }
    },
    {
        method: 'POST',
        path:'/user/login',
        handler: controller.users.login,
        config: {
            auth: false,
            description: '用户登录',
            tags: ['api', 'users'],
            validate: {
                payload: {
                	phone: joi.string().length(11).required().description('手机号码'),
					password: joi.string().length(32).required().description('加密密码')
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/user/register',
        handler: controller.users.register,
        config: {
            auth: false,
            description: "用户注册",
            tags: ['api', 'users'],
            validate: {
                payload: {

                }
            }
        }
    },
    {
        method: 'POST',
        path: '/user/reset',
        handler: controller.users.reset,
        config: {
            auth: false,
            description: '重置密码',
            tags: ['api', 'users'],
            validate: {
                payload: {

                }
            }
        }
    },
	{
		method: 'POST',
		path: '/user/avatar',
		handler: controller.users.avatar,
		config: {
			description: '更换用户头像',
			tags: ['api', 'users'],
			validate: {
				payload:{
					avatar: joi.string().uri().required().description('新头像地址')
				}
			}
		}
	},
	{
		method: 'POST',
		path: '/user/nickname',
		handler: controller.users.nickname,
		config: {
			description: '修改用户昵称',
			tags: ['api', 'users'],
			validate: {
				payload:{
					nickname: joi.string().min(1).required().description('新昵称')
				}
			}
		}
	},

    {
        method: 'GET',
        path: '/friend/list',
        handler: controller.friends.list,
        config: {
            description: '获取好友列表',
            tags: ['api', 'friends']
        }
    },
    {
        method: 'GET',
        path: '/groups/list',
        handler: controller.groups.list,
        config: {
            description: '获取群聊列表',
            tags: ['api', 'groups']
        }
    },
    /* TODO 更多API可继续添加 */
];
