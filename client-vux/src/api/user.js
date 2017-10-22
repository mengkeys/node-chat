import api from '@/api'

export default {
	login(data, resolve, reject){
		api.post('/user/login', data).then((resp) => {
			if(resp.data.code === 0){
				resolve(resp)
			} else {
				reject(new Error(resp.data.result));
			}
		}).catch((err) => {
			reject(err);
		});
	},
	register(data, resolve, reject){
		api.post('/user/register', data).then((resp) => {
			if(resp.data.code === 0){
				resolve(resp);
			} else {
				// 请求失败
				reject(new Error(resp.data.result));
			}
		}).catch((err) => {
			reject(err);
		});
	},

	reset(data, resolve, reject){
		api.post('/user/reset', data).then((resp) => {
			if(resp.data.code === 0){
				resolve(resp);
			} else {
				// 请求失败
				reject(new Error(resp.data.result));
			}
		}).catch((err) => {
			reject(err);
		});
	},

	code(data, resolve, reject){
		api.post('/common/verify/code', data).then((resp) => {
			if(resp.data.code === 0){
				resolve(resp);
			} else {
				// 请求失败
				reject(new Error(resp.data.result));
			}
		}).catch((err) => {
			reject(err);
		});
	}
}
