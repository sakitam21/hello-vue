import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '../components/Main.vue';
import Board from '../components/main/Board.vue';
import A from '../components/main/A.vue';
import B from '../components/main/B.vue';

//把组件（components）映射到路由（routes）
export default new VueRouter({
	routes: [
		{
			path:'/',
			redirect:'/main/board'
		},
		{
			path:'/main',
			component: Main,
			children: [
				{
					path:'board',
					name:'board',
					component: Board
				},
				{
					path:'list2',
					name:'list2',
					component: B
				},
				{
					path:'list3',
					name:'list3',
					component: A
				},
			]
		}
	],
	mode:'history'
})