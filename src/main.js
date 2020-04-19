import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueAnime from 'vue-animejs'

import VueAxios from 'vue-axios'
import axios from 'axios'

import auth from './models/auth'
Vue.use(VueAxios, axios)
Vue.use(VueAnime)

Vue.config.productionTip = false
const API_URL = 'http://local.api.kriekon.com/v1/'
Vue.axios.defaults.baseURL = API_URL
Vue.axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8'
Vue.prototype.$auth = auth
auth.checkAuth()

new Vue({
	router,
	store,
	axios,
	render: h => h(App)
}).$mount('#app')
