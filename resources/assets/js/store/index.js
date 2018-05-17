import Vue from 'vue'
import Vuex from 'vuex'
import conversations from './modules/conversations'

Vue.use(Vuex)

expport default new Vuex.Store({
	modules: {
		conversations
	}
})