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
          <input type="checkbox" id="前端" value="0" v-model="checkedTags">
          <label for="前端">前端</label>
          <input type="checkbox" id="html5" value="1" v-model="checkedTags">
          <label for="html5">html5</label>
          <input type="checkbox" id="css3" value="2" v-model="checkedTags">
          <label for="css3">css3</label>
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
import articletags from '../../mock/article/articletags.js'
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
			//需要提交一个Action请求
			var article_id = this.$store.getters.getArticleNum+1
			var username = this.$store.state.user.username
			var article_tag=[]
			//console.log(articletags);
			for(let i=0;i<this.checkedTags.length;i++){
				let index = parseInt(this.checkedTags[i])
				article_tag.push(articletags[index])
			}
			var newarticle={
				article_id:article_id,
				article_title:this.title,
				article_author:username,
				article_tag:article_tag,
				article_date:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
				article_content:this.content,
				like_number:0,
				like_users:[],
				comment_number:0,
				comment_content:[],
				collect_number:0,
				collect_users:[]
			}
			//console.log(newarticle)
			this.$store.commit('addArticle',newarticle)
			if(this.$store.getters.getArticleNum==article_id){
				//添加成功
				alert("文章提交成功！")
			}else{
				//添加失败
				alert("文章提交失败！")
			}
			//跳转页面
			this.$router.push({name:'column'})
		}
	}
}
</script>

<style scoped>

</style>