<template>
	<div class="columnitem">
		
		<div class="sidebar">
			sidebar
		</div>

		<div class="articlebody">
			<div class="author">
				<div class="avatar"></div>
				AUTHOR:{{article.article_author}}
			</div>
			<div class="title">
				<h2>{{article.article_title}}</h2>
			</div>
			<div class="annotation">
				<div class="tags">
					<div class="tagitem" v-for="(tag,index) in article.article_tag" v-bind:key="index">
						{{tag.tag_name}}
					</div>
				</div>
				<div class="date">
					发布于{{article.article_date.split("-")[1]}}月{{article.article_date.split("-")[2]}}日
				</div>
			</div>
			<div class="content">
				<p>{{article.article_content}}</p>
			</div>
			<div class="bottom">
				<div v-bind:class="{item:true,liked:haslogin&&myliked.indexOf(article.article_id)!=-1}" v-on:click="likeArticle(article.article_id)">赞{{article.like_number}}</div>
				<div v-bind:class="{item:true,liked:haslogin&&mycollected.indexOf(article.article_id)!=-1}" v-on:click="collectArticle(article.article_id)">收藏{{article.collect_number}}</div>
			</div>
		</div>

		<div class="comment">
			共有{{article.comment_number}}条评论
			<div class="commentitem" v-for="(comment,index) in article.comment_content" v-bind:key="index">
				<div class="username">{{comment.username}}</div>
				<div class="date">发布于{{comment.comment_date}}</div>
				<div class="content">
					{{comment.comment_content}}
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default{
  name:"ColumnItem",
  computed:{
	haslogin:function(){
      return this.$store.state.user.haslogin
    }, 	
    myliked:function(){
      var userid = this.$store.state.user.userid
      console.log(this.$store.getters.myLikedArticles(userid))
      return this.$store.getters.myLikedArticles(userid)
    },
    mycollected:function(){
      var userid = this.$store.state.user.userid
      console.log(this.$store.getters.myCollectedArticles(userid))
      return this.$store.getters.myCollectedArticles(userid)
    },
    article:function(){
      var index = this.$route.params.columnid
      return this.$store.getters.getArticleByIndex(index)
    },
  },
  methods:{
	likeArticle:function(article_id){
      //console.log(index)
      //点赞前需要确认是否已经登录
      var index=article_id-1
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
    collectArticle:function(article_id){
      //console.log(index)
      //点赞前需要确认是否已经登录
      var index=article_id-1
      if(this.$store.state.user.haslogin){
		//修改相应的state
        //需要把user_id,username,index,article_id,和是否已经点赞isliked都传过去（使用对象）
        var iscollected=false
        if(this.mycollected.indexOf(article_id)!=-1){
          iscollected=true
        }
        var collectmsg={
          user:{
            userid:0,
            username:"root",
            password:"password",
          },
          index:index,
          article_id:article_id,
          iscollected:iscollected
        }
        this.$store.commit('collectArticle',collectmsg)
        //console.log(this.$store.getters.myCollectedArticles(0))
      }else{
        alert("请先登录");
      }
    },
  },
}
</script>

<style scoped>
.columnitem{
	width: 100%;
	background-color: #f0f0f0;
	padding: 30px 0;
}

.columnitem .sidebar{
	width: 70px;
	height: 200px;
	margin-left: 120px;
	border: 1px solid #333;
	float: left;
	border-radius: 5px;
}

.columnitem .articlebody{
	width: 70%;
	background-color: #fff;
	margin-left: 16%;
	padding: 30px;
	border-radius: 5px;
}

.articlebody .author{
	font-size: 18px;
	font-weight: bold;
	color: #008b8b;
	width: 100%;
	height: 50px;
	line-height: 50px;
}

.articlebody .author .avatar{
	float: left;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	border: 1px solid #333;
}

.articlebody .title{
	width: 100%;
	height: 40px;
	margin: 10px 0;
}

.articlebody .annotation{
	width: 100%;
	height: 30px;
}
.articlebody .annotation .tags{
	width: 160px;
	height: 30px;
	float: left;
}

.articlebody .annotation .tags .tagitem{
	width: 56px;
	height: 30px;
	float: left;
	margin-right: 10px;
	background-color: rgba(153,204,204,0.2);
	border-radius: 4px;
	line-height: 30px;
	text-align: center;
	color: #008b8b;
}
.articlebody .annotation .date{
	width: 200px;
	height: 30px;
	line-height: 30px;
	float: left;
}
.articlebody .content{
	margin: 20px 0;
	text-indent: 2em;
	line-height: 1.8em;
	font-family: "宋体";
}

.articlebody .bottom{
	width: 100%;
	height: 50px;
	padding: 9px 0;
	text-align: center;
}

.articlebody .bottom .item{
	display: inline-block;
	width:100px;
	height: 32px;
	border: 1px solid #333;
	vertical-align: top;
    text-align: center;
    margin-left: 10px;
    line-height: 32px;
    border-radius: 5px;
    letter-spacing: 4px;
}

.articlebody .bottom .liked{
	border: 2px solid #008b8b;
}

.columnitem .comment{
	width: 70%;
	background-color: #fff;
	margin-left: 16%;
	margin-top: 10px;
	padding: 30px;
	border-radius: 5px;
}
</style>