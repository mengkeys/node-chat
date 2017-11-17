import * as types from '@/store/mutation-types'

export default {
	[types.RECEIVE_TOKEN] (state, payload) {
		console.log(payload);
		state.user.token = payload.token;
	},
	[types.LOGIN_SUCCESS] (state, payload) {
		console.log(payload);
		state.user = payload.user;

	},
	[types.LOGINOUT_SUCCESS] (){
		state.login = false;
		// 调用mutation修改token
	},
	[types.RECEIVE_USER_SEARCH_RESULT] (state, payload){
		state.search.results = payload.list;
	}
}
