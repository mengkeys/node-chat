const mutations = {
	loginSuccess(state, payload){
		state.login = payload.login;
	},
	receiveToken(state, payload){
		state.token = payload.token;
	}
};
export default {
	mutations
}
