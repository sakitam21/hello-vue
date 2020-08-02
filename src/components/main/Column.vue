<template>
  <div class="column">
    <h1 style="text-align: center;">Column Component</h1>
    <div class="articleItem" v-for="(article,index) in articles" v-bind:key="index">
      <div class="articleTitle">
        {{article.article_title}}
      </div>
      <div class="articleAuthor">
        author:{{article.article_author}}
      </div>
      <div class="articleContent">
        {{article.article_content}}
      </div>
      <div v-bind:class="{like:true,liked:haslogin&&myliked.indexOf(article.article_id)!=-1}" v-on:click="likeArticle(article.article_id,index)">
        {{article.like_number}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Column',
  data:function(){
    return {
    }
  },
  computed:{
    haslogin:function(){
      return this.$store.state.user.haslogin
    }, 	
    myliked:function(){
      var userid = this.$store.state.user.userid
      return this.$store.getters.myLikedArticles(userid)
    },
    articles:function(){
      return this.$store.state.article.articles
    }
  },
  methods:{
    likeArticle:function(article_id,index){
      //console.log(index)
      //点赞前需要确认是否已经登录
      if(this.$store.state.user.haslogin){
		//修改相应的state
        //需要把user_id,username,index,article_id,和是否已经点赞isliked都传过去（使用对象）
        var isliked=false
        if(this.myliked.indexOf(article_id)!=-1){
          isliked=true
        }
        var likemsg={
          user:{
            userid:0,
            username:"root",
            password:"password",
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column{
	padding: 30px 8%;
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

</style>
