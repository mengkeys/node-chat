import Vue from 'vue'
import Vuex, {Payload, Store} from 'vuex'
import VuexPersistence from 'vuex-persist'
import * as actions from '@/store/actions'
import * as getters from '@/store/getters'
import mutations from '@/store/mutations'
import groups from '@/store/modules/groups'
import friends from '@/store/modules/friends'


console.log(actions);
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);
const store = new Vuex.Store({
	// 这里你可能已经有其他 module
	state: {
		// 当前登录用户信息
		user: {
			login: false,
			token: "",
			id: null,
			nickname: '',
			avatar: ''
		},
		/* 当前聊天的对象 */
		chat: {

		},
		//friends: [],   // 好友列表(拉黑)
		//groups: [],     // 群聊列表()    消息存储方式(room{type}{id})
	},
	actions,
	getters,
	mutations,
	modules:{
		friends,
		groups
	},
	strict: debug,
	//plugins: [(new VuexPersistence()).plugin]
});

store.registerModule('vux', { // 名字自己定义
	state: {
		isLoading: false
	},
	mutations: {
		updateLoadingStatus(state, payload){
			state.isLoading = payload.isLoading;
		}
	},
});

export default  store;
