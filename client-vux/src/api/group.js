import api from '@/api'


export default {
	list(resolve, reject){
		// 获取好友列表
		api.get('/group/list').then((resp) => {
			if(resp.data.code === 0){
				resolve(resp.data.result);
			}
		}).catch((err) => {
			reject(err);
		});
	}
}
