import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue')
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('./views/Login.vue')
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('./views/Register.vue')
		},
		{
			path: '/user',
			name: 'user',
			component: () => import('./views/user/Index.vue'),
			children:
			[
				{
					path: 'p/:username',
					component: () => import('./views/user/Profile.vue')
				}
			]
		}
	]
})
