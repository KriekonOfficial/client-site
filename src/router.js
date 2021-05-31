import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/Login.vue')
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('@/views/Register.vue')
	},
	{
		path: '/user',
		name: 'User',
		component: () => import('@/views/user/Index.vue'),
		children:
		[
			{
				path: 'p/:username',
				component: () => import('@/views/user/Profile.vue')
			}
		]
	}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

