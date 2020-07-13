import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '@/components/Main.vue';
import Board from '@/components/main/Board.vue';
import A from '@/components/main/A.vue';
import B from '@/components/main/B.vue';

/*
*下面步骤把组件（components）映射到路由（routes）
*而<router-view />告诉Vue Router在哪里渲染它们
*/
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
	]
	//mode:'hash'
})