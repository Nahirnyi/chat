import api from '../api/all'
import conversation from './conversation'

const state = {
	conversations: [],
	loadingConversations: false
}

const getters = {

}

const actions = {
	getConversations({dispatch, commit}, page){
		api.getConversations(1).then((response) => {
			commit('setComversations', response.data)
		})
	}
}

const mutations = {

}

const modules = {
	conversation: conversation
}

export default {
	state,
	getters,
	mutations,
	actions,
	modules
}