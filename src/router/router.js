import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '@/components/Main.vue';
import Index from '@/components/main/Index.vue';
import Column from '@/components/main/Column.vue';
import ColumnItem from '@/components/main/ColumnItem.vue';
import AddArticle from '@/components/main/AddArticle.vue';
import C from '@/components/main/C.vue';


import Profile from '@/components/profile/Profile.vue';
import MyArticle from '@/components/profile/MyArticle.vue';
import MyLike from '@/components/profile/MyLike.vue';
import MyCollect from '@/components/profile/MyCollect.vue';

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
					path:'column/columnid=:columnid',
					name:'columnitem',
					component: ColumnItem
				},
				{
					path:'column/addarticle',
					name:'addarticle',
					component: AddArticle
				},
				{
					path:'list3',
					name:'list3',
					component: C
				},
			]
		},
		{
			path:'/profile',
			name:'profile',
			component: Profile,
			children:[
				{
					path:'myarticle',
					name:'myarticle',
					component: MyArticle
				},
				{
					path:'mylike',
					name:'mylike',
					component: MyLike
				},
				{
					path:'mycollect',
					name:'mycollect',
					component: MyCollect
				},
			]
		},
	]
	//mode:'hash'
})