import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		logged_in: false
	},
	mutations: {
		authLoggedInState: function (state, loggedInState)
		{
			state.logged_in = loggedInState
		}
	},
	actions: {
		loggedIn: function ({ commit }, loggedInState)
		{
			if (loggedInState !== false && loggedInState !== true)
			{
				throw new Error('Invalid Log In State')
			}
			commit('authLoggedInState', loggedInState)
		}
	},
	getters: {
		isLoggedIn: state =>
		{
			return state.logged_in
		}
	}
})
