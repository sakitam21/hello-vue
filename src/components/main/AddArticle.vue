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
          <input type="checkbox" id="web" value="WEB" v-model="checkedTags">
          <label for="web">web</label>
          <input type="checkbox" id="html5" value="HTML5" v-model="checkedTags">
          <label for="html5">html5</label>
          <input type="checkbox" id="css3" value="CSS3" v-model="checkedTags">
          <label for="css3">css3</label>
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
			var newArticle={
				title:this.title,
				checkedTags:this.checkedTags,
				content:this.content,
				date:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()
			}
			console.log(newArticle)
		}
	}
}
</script>

<style scoped>

</style>