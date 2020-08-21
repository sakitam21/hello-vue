<template>
  <div class="column">
    <h1>Column Component</h1>

    <div class="addArticle" v-if="haslogin">
      <router-link :to="{name:'addarticle'}">
        AddArticle
      </router-link>
    </div>

    <div class="allTags">
      <ul>
        <!--在前端用函数分类-->
        <li v-on:click="allArticles" v-bind:class="{tagitem:true,lightTag:currentTag==-1}">全部</li>
        <li v-for="(tag,index) in articletags" v-bind:key="index" v-on:click="classifyArticle(tag.tag_id)" v-bind:class="{tagitem:true,lightTag:currentTag==index}">
          {{tag.tag_name}}
        </li>
      </ul>
    </div>

    <div v-if="!isclassify">
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
          <div v-bind:class="{like:true,liked:haslogin&&myliked.indexOf(article.article_id)!=-1}" v-on:click="likeArticle(article.article_id)">
            {{article.like_number}}
          </div>
        </div>
        
      </div>
    </div>
    
    <div v-else>
      <div v-for="(article,index) in classifyArticles" v-bind:key="index">
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
          <div v-bind:class="{like:true,liked:haslogin&&myliked.indexOf(article.article_id)!=-1}" v-on:click="likeArticle(article.article_id)">
            
            {{article.like_number}}
          </div>
        </div>
      </div>
    </div>

    <div class="paging" v-if="pageinfo.pagenum>4">
      <Pagination v-bind:pageinfo="pageinfo" v-on:switchpage="switchPage"/>
    </div>

  </div>
</template>

<script>
import articletags from '../../mock/article/articletags.js'
import Pagination from '@/components/main/Pagination.vue'
export default {
  name: 'Column',
  components:{
    Pagination
  },
  data:function(){
    return {
      articletags:articletags, //所有的分类标签
      isclassify:false, //是否分类
      newArticles:[], //分类后的文章数组
      currentTag: -1,//当前标签索引

      //pagination
      pageinfo:{
        pagenum:204,
        left:0,
        currentpage:0,
      }
    }
  },
  computed:{
    classifyArticles:function(){
      return this.newArticles
    },
    haslogin:function(){
      return this.$store.state.user.haslogin
    }, 	
    myliked:function(){
      var userid = this.$store.state.user.userid
      return this.$store.getters.myLikedArticles(userid)
    },
    articles:function(){
      return this.$store.state.article.articles
    },
    page:function(){
      let page=this.pageinfo.pagenum/4
      /*
      if(this.pageinfo.pagenum%4!=0){
        page++
      }
      */
      return page
    }
  },
  methods:{
    //跳转到专栏文章详情页
    goColumnItem:function(index){
      //编程式路由
      this.$router.push({name:'columnitem',params:{columnid:index}})
    },
    likeArticle:function(article_id){
      //console.log(index)
      var index=article_id-1
      //点赞前需要确认是否已经登录
      if(this.$store.state.user.haslogin){
        //修改相应的state
        //需要把user_id,username,index,article_id,和是否已经点赞isliked都传过去（使用对象）
        var isliked=false
        if(this.myliked.indexOf(article_id)!=-1){
          isliked=true
        }

        var userid=this.$store.state.user.userid
        var username=this.$store.state.user.username
        var password=this.$store.state.user.password

        var likemsg={
          user:{
            userid:userid,
            username:username,
            password:password,
          },
          index:index,
          article_id:article_id,
          isliked:isliked
        }

        this.$store.commit('likeArticle',likemsg)
        console.log(this.$store.getters.myLikedArticles(0))
      }else{
        alert("请先登录");
      }
    },

    //显示全部文章
    allArticles:function(){
      this.isclassify=false
      this.currentTag=-1
      this.pageinfo.pagenum=this.articles.length
      this.pageinfo.currentpage=0
      this.pageinfo.left=0
    },

    //显示分类文章
    classifyArticle:function(tag_id){
      //alert(tag_id);
      let allArticles=this.articles
      this.newArticles = []
      for(let i=0;i<allArticles.length;i++){
        for(let j=0;j<allArticles[i].article_tag.length;j++){
          if(allArticles[i].article_tag[j].tag_id==tag_id){
            this.newArticles.push(allArticles[i])
            break;
          }
        }
      }
      console.log(this.newArticles);
      this.isclassify=true
      this.currentTag=tag_id
      this.pageinfo.pagenum=this.newArticles.length
      this.pageinfo.currentpage=0
      this.pageinfo.left=0
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
.column{
	padding: 30px 8%;
}
.column .addArticle{
  width: 120px;
  height: 32px;
  border: 1px solid #333;
  text-align: center;
  line-height: 32px;
  margin: 10px auto;
  border-radius: 5px;
}
.column .allTags{
  margin: 30px auto;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.allTags .tagitem{
  display: inline-block;
  padding: 0 30px;
  height: 30px;
  margin-right: 20px;
  background-color: #f0f0f0;
  color: #999;
  border-radius: 5px;
  vertical-align: top;
}
.allTags .lightTag{
  background-color: rgba(153,204,204,0.2);
  color: #008b8b;
}
.column .articleItem{
	position: relative;
	padding-bottom: 20px;
	padding-left: 60px;
	margin-bottom: 20px;
	border-bottom: 1px solid #333;
}
.column .articleItem:last-child{
	border: none;
}
.articleItem .like{
	position: absolute;
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	border: 1px solid #333;
	top: 0;
	left: 0;
	border-radius: 5px;
}

.articleItem .liked{
	border: 2px solid #008b8b;
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
.paging{
  width: 100%;
  height: 50px;
  margin: 10px 0;
  background-color: #fff;
  text-align: center;
}

</style>
