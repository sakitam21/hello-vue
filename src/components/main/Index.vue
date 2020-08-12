<template>
  <div class="index">
    <h1 style="margin: 20px 0;">Index Component</h1>

    <div class="sidebarlist">
      <div class="sidebar">
        <ul>
          <li class="title">分类</li>
          <li v-bind:class="{list:true,lighted:tag==0}" value="0" v-on:click="getArticle">近期点赞最多</li>
          <li v-bind:class="{list:true,lighted:tag==1}" value="1" v-on:click="getArticle">近期收藏最多</li>
          <li v-bind:class="{list:true,lighted:tag==2}" value="2" v-on:click="getArticle">近期评论最多</li>
        </ul>
        <ul>
          <li class="title">标签</li>
          <li v-for="(tagitem,index) in articletags" v-bind:key="index" v-bind:value="index+3" v-bind:class="{list:true,lighted:tag==index+3}" v-on:click="getArticle">
          {{tagitem.tag_name}}
          </li>
        </ul>
      </div>
    </div>

    <div class="content">
      <h2>indexContent</h2>
      <div class="articleItem" v-for="(article,index) in articles" v-bind:key="index">
        <div class="articleTitle" v-on:click="goColumnItem(index)">
          <!--使用编程式的导航-->
          {{article.article_title}}
        </div>
        <div class="articleAuthor">
          author:{{article.article_author}}
        </div>
        <div class="articleContent">
          {{article.article_content}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import articletags from '../../mock/article/articletags.js'
export default {
  name: 'Index',
  data:function(){
    return {
      articletags:articletags,
      tag: 0,
    }
  },
  computed:{
    articles:function(){
      return this.$store.getters.getArticlesByTag(this.tag)
    }
  },
  methods:{
    getArticle:function(event){
      //获取的是点击的list的value
      let tag = event.target.value
      this.tag=tag
      //console.log(this.tag)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
	padding: 30px 6%;
	text-align: left;
	background-color: #f3f3f3;
}
.index .sidebarlist{
	display: inline-block;
	width: 22%;
	vertical-align: top;
	background-color: #fff;
	border-radius: 5px;
}
.sidebarlist .sidebar{
	margin: 10px 20px;
}
.sidebar .title{
	color: #333;
	font-size: 18px;
	margin: 6px 0;

}
.sidebar .list{
	border-bottom: 1px dotted #ccc;
}

.sidebar .lighted{
	color: #008b8b;
}
.sidebar li{
	list-style: none;
	line-height: 40px;
	color: #999; 
}
.sidebar .list:hover{
	color: #008b8b;
}
.index .content{
	display: inline-block;
	width: 68%;
	padding: 20px;
	margin-left: 4%;
	vertical-align: top;
	background-color: #fff;
	border-radius: 5px;
}
</style>
