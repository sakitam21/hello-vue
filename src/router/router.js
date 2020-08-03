import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '@/components/Main.vue';
import Index from '@/components/main/Index.vue';
import Column from '@/components/main/Column.vue';
import ColumnItem from '@/components/main/ColumnItem.vue';
import C from '@/components/main/C.vue';

/*
*下面步骤把组件（components）映射到路由（routes）
*而<router-view />告诉Vue Router在哪里渲染它们
*/
export default new VueRouter({
	routes: [
		{
			path:'/',
			redirect:'/main/index'
		},
		{
			path:'/main',
			component: Main,
			children: [
				{
					path:'index',
					name:'index',
					component: Index
				},
				{
					path:'column',
					name:'column',
					component: Column
				},
				{
					//嵌套路由
					path:'column/:columnid',
					name:'columnitem',
					component: ColumnItem
				},
				{
					path:'list3',
					name:'list3',
					component: C
				},
			]
		}
	]
	//mode:'hash'
})