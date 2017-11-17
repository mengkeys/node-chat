import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: resolve => require(['@/views/home'], resolve),
			redirect: {
				name: 'Records'
			},
			children: [
				{
					path: '/contacts',
					name: 'Contacts',
					component: resolve => require(['@/views/contacts'], resolve)
				},
				{
					path: '/groups',
					name: 'Groups',
					component: resolve => require(['@/views/group/list'], resolve)
				},
				{
					path: '/friends',
					name: 'Friends',
					component: resolve => require(['@/views/friends'], resolve)
				},
				{
					path: '/search',
					name: 'Search',
					component: resolve => require(['@/views/search'], resolve)
				},
				{
					path: '/records',
					name: 'Records',
					component: resolve => require(['@/views/records'], resolve)
				},
				{
					path: '/discovery',
					name: 'Discovery',
					component: resolve => require(['@/views/discovery'], resolve)
				},
				{
					path: '/profile',
					name: 'Profile',
					component: resolve => require(['@/views/profile'], resolve)
				},
				{
					path: '/chat',
					name:'Chat',
					component: resolve => require(['@/views/chat'], resolve)
				},
				{
					path: '/user',
					name: 'User',
					component: resolve => require(['@/views/user'], resolve)
				},
				{
					path: '/group',
					name: 'Group',
					component: resolve => require(['@/views/group/details'], resolve)
				},
				{
					path: '/profile/setting',
					name: 'Setting',
					component: resolve => require(['@/views/setting'], resolve)
				}
			]
		},
		{
			path: '/login',
			name: 'Login',
			component: resolve => require(['@/views/login'], resolve)
		},
		{
			path: '/register',
			name: 'Register',
			component: resolve => require(['@/views/register'], resolve)
		},
		{
			path: '/reset',
			name:'Reset',
			component: resolve => require(['@/views/reset'], resolve)
		}
	]
});

router.beforeEach((to, from, next) => {
	store.commit('updateLoadingStatus', {isLoading: true});
	/* 需要登陆 */
	const gateways = ['Login', 'Register', 'Reset'];
	//const login = localStorage.getItem('login');
	const login = store.state.user.login;
	if(login){
		if(gateways.indexOf(to.name) === -1){
			return next();
		} else {
			return next({
				name: 'Home',
				redirect: from.fullPath
			});
		}
	} else {
		if(gateways.indexOf(to.name) === -1){
			return next({
				name: 'Login',
				redirect: from.fullPath
			});
		} else {
			return next();
		}
	}
});



router.afterEach(function (to) {
	store.commit('updateLoadingStatus', {isLoading: false})
});

export default router;
