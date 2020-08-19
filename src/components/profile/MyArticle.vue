<template>
  <div class="myarticle">
    <!--{{myarticles}}-->
    <div class="content">
      <div v-for="(article,index) in myarticles" v-bind:key="index">
        <div class="articleItem">
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
    </div>
  </div>
</template>

<script>
export default{
  name:'MyArticle',
  computed:{
    myarticles:function(){
      let username = this.$store.state.user.username
      let myArticles=this.$store.getters.myArticles(username)
      return myArticles;
    }
  },
  methods:{
    //跳转到专栏文章详情页
    goColumnItem:function(index){
      //编程式路由
      this.$router.push({name:'columnitem',params:{columnid:index}})
    },
  },
}
</script>

<style scoped>
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
</style>