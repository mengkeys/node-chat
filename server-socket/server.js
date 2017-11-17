'use strict';

const path = require('path');
const _    = require('lodash');
const config = require(path.join(__dirname, 'config'));
const app = require('http').createServer();
const io = require('socket.io')(app);
const jwt   = require(path.join(__dirname, 'lib', 'jwt'));
const fs = require('fs');
const port = process.env.NODE_PORT || config.server.port;

// function handler(req, res) {
//     fs.readFile(__dirname + '/index.html', function (err, data) {
//         if (err) {
//             res.writeHead(500);
//             return res.end('Error loading index.html');
//         }
//         res.writeHead(200);
//         res.end(data);
//     });
// }


/* 对客户端身份进行验证 */

io.on('connection', function (socket) {
	console.log('客户端连接请求');
	console.log(socket.id);
	/* 处理签名 */
	socket.login = false;    // 初始状态

	socket.on('login', function(data){
		console.log('socket.login:', data);
		// 验证码token
		if(_.isUndefined(data.token)){
			socket.emit('login', {code: 1, message: 'token required'});
			return false;
		}
		console.log(`data.token: ${data.token}`);
		const decode = jwt.decode(data.token);
		if(!decode){
			// 签名校验错误
			socket.emit('login', {code: 1, message: 'Invalid token value'});
			return false;
		}
		/* 绑定账号 */
		socket.login = true; // 已经登录
		socket.user = decode.extend;    // 绑定信息
		console.log(io.sockets.sockets.length);
		socket.emit('login', {code: 0, message: 'login success', uuid: socket.id, date: new Date()});
	});

	/* TODO 客户端断开连接 */
	socket.on('disconnect', function(){
		// 删除绑定信息
		delete socket.user;
		// 切换登录状态
		socket.login = false;
	});

    /* TODO 接收客户端消息 */
    socket.on('message', function(data){
        console.log(data);
    });

    /* TODO 对方正在输入 */
    socket.on('typing', function(data){
    	// 需要处理
		/* data {
		       sender: '',

		}*/
		console.log('收到输入消息');
		socket.broadcast.emit('typing', {
			user: socket.user
		});
    });

    /* TODO 对方停止输入 */
    socket.on('typing stop', function(data){

    });

    /* TODO 添加好友申请 */
    socket.on('friend apply', function(data){

	});

    /* TODO 添加好友处理 */
    socket.on('friend audit', function(data){

	});
});

io.on('disconnect', function(){
	io.sockets.emit('disconnect', {date: new Date()});
});

app.listen(port, function(){
	console.log('Server running at:', port);
});
