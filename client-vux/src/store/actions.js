import user from '@/api/user'
import * as types from './mutation-types'

export const userLogin = ({ commit }, payload) => {
	return new Promise((resolve, reject) => {
		user.login(payload, (resp) => {
			console.log(resp);
			// 成功
			commit(types.LOGIN_SUCCESS, { user: resp.data.result});
			resolve(null);
		}, (err) => {
			reject(err);
		});
	});
};

export const userInfo = ({commit, payload}) => {
	user.info((resp) => {
		commit(types.RECEIVE_USER_INFO, { user: resp.data.result });
	})
};
