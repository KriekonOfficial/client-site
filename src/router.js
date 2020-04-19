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
			path: '/news',
			name: 'news',
			component: () => import('./views/News.vue')
		},
		{
			path: '/games',
			name: 'games',
			component: () => import('./views/Games.vue')
		},
		{
			path: '/blogs',
			name: 'blogs',
			component: () => import('./views/Blogs.vue')
		},
		{
			path: '/forum',
			name: 'forum',
			component: () => import('./views/Forum.vue')
		},
		{
			path: '/videos',
			name: 'videos',
			component: () => import('./views/Videos.vue')
		},
		{
			path: '/stream',
			name: 'stream',
			component: () => import('./views/Stream.vue')
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
