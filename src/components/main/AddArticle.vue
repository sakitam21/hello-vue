<template>
	<div class="addArticle">
		<h1>addArticle</h1>
		<form v-on:submit.prevent="addArticle" class="addform">
        <h2>添加文章表单</h2>
        <div class="inputItem">
          <label for="title">title</label>
          <input type="text" v-model="title" id="title">
        </div>
        <div class="inputItem">
          <p>选择标签</p>
          <input type="checkbox" id="html" value="0" v-model="checkedTags">
          <label for="html">html</label>
          <input type="checkbox" id="css" value="1" v-model="checkedTags">
          <label for="css">css</label>
          <input type="checkbox" id="js" value="2" v-model="checkedTags">
          <label for="js">js</label>
          <input type="checkbox" id="vue" value="3" v-model="checkedTags">
          <label for="vue">vue</label>
          <input type="checkbox" id="react" value="4" v-model="checkedTags">
          <label for="react">react</label>
        </div>
        <div class="inputItem">
          <label for="content">Content</label>
          <textarea type="text" v-model="content" id="content" placeholder="Add Article Content"></textarea>
        </div>
        <button>提交</button>
      </form>

      {{title}}
      {{checkedTags}}
      {{content}}
	</div>
</template>

<script>
import axios from 'axios'
import articletags from '../../mock/article/articletags.js'
import {addArticle} from '@/api/api.js'
export default{
	name:"AddArticle",
	data:function(){
		return {
			title:'',//文章标题
			checkedTags:[], //选择的标签
			content:'', //文章内容
		}
	},
	methods:{
		addArticle:function(){
			let that =this
			//需要提交一个Action请求
			var article_id = this.$store.getters.getArticleNum
			var username = this.$store.state.user.username
			var article_tag=[]
			//console.log(articletags);
			for(let i=0;i<this.checkedTags.length;i++){
				let index = parseInt(this.checkedTags[i])
				article_tag.push(articletags[index])
			}

			var newarticle={
				article_id:article_id,
				article_title:that.title,
				article_author:username,
				article_tag:article_tag,
				article_date:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
				article_content:that.content,
				like_number:0,
				like_users:[],
				comment_number:0,
				comment_content:[],
				collect_number:0,
				collect_users:[]
			}

			axios.post(addArticle,{
				article_id:article_id,
				article_title:that.title,
				article_author:username,
				article_tag:article_tag,
				article_date:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
				article_content:that.content
			}).then(function(response){
				console.log(response.data)
				//如果后台数据修改成功
				if(response.data){
					that.$store.commit('addArticle',newarticle)
					alert("文章提交成功！")
				}else{
					alert("文章提交失败！")
				}
			}).catch(function(error){
				console.log(error)
				alert("文章提交失败！")
			})
			
			/*
			//console.log(newarticle)
			this.$store.commit('addArticle',newarticle)
			if(this.$store.getters.getArticleNum==article_id+1){
				//添加成功
				alert("文章提交成功！")
			}else{
				//添加失败
				alert("文章提交失败！")
			}
			*/
			//跳转页面
			this.$router.push({name:'column'})
		}
	}
}
</script>

<style scoped>

</style>