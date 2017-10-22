import group from '@/api/group'
import * as types from '@/store/mutation-types'

const state = {
	list: []
};


const getters = {};

const actions = {
	/*  读取群列表 */
	listGroup({ commit }){
		group.list(groups => {
			commit(types.RECEIVE_GROUP_LIST, { groups });
		});
	},
	/*  */
	createGroup({ commit }) {
		group.create(() => {

		});
	},
	detailsGroup({commit}) {
		// 直接在
	}

};

const mutations = {
	[types.RECEIVE_GROUP_LIST] (state, { groups }) {
		state.list = groups
	},

	[types.CREATE_NEW_GROUP] (state, { id }) {

	},

	/* 申请加群 */
	[types.APPLY_JOIN_GROUP] (state, {id}) {

	}
};

export default {
	state,
	getters,
	actions,
	mutations
}
