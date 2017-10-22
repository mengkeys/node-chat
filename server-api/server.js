'use strict';
const hapi         = require('hapi');
const path         = require('path');
const inert        = require('inert');
const vision       = require('vision');
const _            = require('lodash');
const good         = require('good');
const good_console = require('good-console');
const good_squeeze = require('good-squeeze');
const fs           = require('fs');
const haj2         = require('hapi-auth-jwt2');
const swagger      = require('hapi-swagger');
const pack         = require(path.join(__dirname, 'package'));
const config       = require(path.join(__dirname, 'config'));
const router       = require(path.join(__dirname, 'router'));
const controller   = require(path.join(__dirname, 'controller'));

const PublicKey   = fs.readFileSync(path.join(__dirname, 'certs', 'app_public_key.pem'));

// Create a server with a host and port
const server = new hapi.Server({
    connections: {
        routes: {
			cors: true,
            validate: {
                options: {
                    allowUnknown: true
                }
            }
        }
    }
});

server.connection(config.server);

server.register([
    inert,
    vision,
	{
		register: good,
		options: {
			ops: {
				interval: 1000
			},
			reporters: {
				myConsoleReporter: [{
					module: 'good-squeeze',
					name: 'Squeeze',
					args: [{ log: '*', response: '*' }]
				}, {
					module: 'good-console'
				}, 'stdout'],
				myFileReporter: [{
					module: 'good-squeeze',
					name: 'Squeeze',
					args: [{ ops: '*' }]
				}, {
					module: 'good-squeeze',
					name: 'SafeJson'
				}, {
					module: 'good-file',
					args: ['./log/fixtures/awesome_log']
				}],
				myHTTPReporter: [{
					module: 'good-squeeze',
					name: 'Squeeze',
					args: [{ error: '*' }]
				}]
			}
		},
	},
    {
        register: swagger,
        options: {
            info: {
                title:  '聊天应用API服务接口文档',
                version: pack.version,
            },
            lang: 'zh-cn',
            grouping: 'tags',
            securityDefinitions: {
                jwt: {
                    type: 'apiKey',
                    name: 'Authorization',
                    in: 'header'
                }
            }
        }
    },
    {
        register: haj2
    }
], (err) => {
    if(err){
        console.log(err);
    }

    server.auth.strategy('jwt', 'jwt', {
        key: PublicKey,          // Never Share your secret key
        validateFunc: function(decode, request, callback){
            // 验证通过
            return callback(null, true);
        },
        verifyOptions: {
            algorithms: [ 'RS256' ]
        } // pick a strong algorithm
    });

    server.auth.default('jwt');
});

// Add the route
server.route(router);

server.start( (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server running at:', server.info.uri);
    }
});
