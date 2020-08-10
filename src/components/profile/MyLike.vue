<template>
  <div class="mylike">
    mylike
    {{myliked}}
  </div>
</template>

<script>
export default{
  name:'MyLike',
  computed:{
    myliked:function(){
      let userid = this.$store.state.user.userid
      let mylikedArticleIndex=this.$store.getters.myLikedArticles(userid)
      //console.log(mylikedArticleIndex)
      let mylikedArticles = []
      for(let i=0;i<mylikedArticleIndex.length;i++){
        mylikedArticles.push(this.$store.getters.getArticleByIndex(parseInt(mylikedArticleIndex[i])))
      }
      //console.log(mylikedArticles)
      return mylikedArticles
    },
  }
}
</script>