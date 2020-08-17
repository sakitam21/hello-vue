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
      <div v-for="(article,index) in articles" v-bind:key="index">
        <div v-if="index>=4*(pageinfo.currentpage)&&index<4*(pageinfo.currentpage+1)" class="articleItem">
          <div class="articleTitle" v-on:click="goColumnItem(article.article_id)">
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

      <div class="paging">
        <Pagination v-bind:pageinfo="pageinfo" v-on:switchpage="switchPage"/>
      </div>
    </div>

  </div>
</template>

<script>
import articletags from '../../mock/article/articletags.js'
import Pagination from '@/components/main/Pagination.vue'
export default {
  name: 'Index',
  components:{
    Pagination
  },
  data:function(){
    return {
      articletags:articletags,
      tag: 0,

      //pagination
      pageinfo:{
        pagenum:40,
        left:0,
        currentpage:0,
      }
      //pageList:[1,2,3,4,5,6,7],
    }
  },
  computed:{
    articles:function(){
      /*
      this.pageinfo.pagenum=this.$store.getters.getArticlesByTag(this.tag).length
      this.pageinfo.left=0
      this.pageinfo.currentpage=0
      */
      return this.$store.getters.getArticlesByTag(this.tag)
    },
    page:function(){
      return this.pageinfo.pagenum/4
    }
  },
  methods:{
    //跳转到专栏文章详情页
    goColumnItem:function(index){
      //编程式路由
      this.$router.push({name:'columnitem',params:{columnid:index}})
    },
    getArticle:function(event){
      //获取的是点击的list的value
      let tag = event.target.value
      this.tag=tag
      this.pageinfo.pagenum=this.$store.getters.getArticlesByTag(tag).length
      this.pageinfo.left=0
      this.pageinfo.currentpage=0
      //console.log(this.tag)
    },
    //切换page
    switchPage(switchinfo){
      if(switchinfo=="addPage"){
        if(this.pageinfo.currentpage<this.page-1){
          if(this.pageinfo.currentpage<this.page-3&&this.pageinfo.currentpage>1){
            this.pageinfo.left=this.pageinfo.left-80
          }
          this.pageinfo.currentpage++
        }
      }else if(switchinfo=="subPage"){
        if(this.pageinfo.currentpage>0){
          if(this.pageinfo.currentpage<this.page-2&&this.pageinfo.currentpage>2){
            this.pageinfo.left=this.pageinfo.left+80
          }
          this.pageinfo.currentpage--
        } 
      }
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

.content .articleItem{
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #333;
}
.content .articleItem:last-child{
  border: none;
}
.articleItem .articleTitle{
  height: 26px;
  line-height: 26px;
  font-size: 18px;
  font-weight: bold;
}
.articleItem .articleAuthor{
  padding: 0 20px;
  color: #008b8b;
}
.articleItem .articleContent{
  width: 100%;
  height: 40px;
  color: #333;
  background: white;
  position: relative;
  overflow: hidden;
  line-height: 20px;
}
.articleItem .articleContent:after{
  content: "..."; 
  position: absolute; 
  bottom: 0; 
  right: 0; 
  padding-left: 40px;
  background: -webkit-linear-gradient(left, transparent, #fff 55%);
  background: -o-linear-gradient(right, transparent, #fff 55%);
  background: -moz-linear-gradient(right, transparent, #fff 55%);
  background: linear-gradient(to right, transparent, #fff 55%);
}

.content .paging{
  width: 100%;
  height: 50px;
  margin: 10px 0;
  background-color: #fff;
  text-align: center;
}
</style>
