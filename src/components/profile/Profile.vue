<template>
  <div class="profile">
    <router-link :to="{name:'index'}">
      <div class="logo">
        <i>Async技术社区（点击返回首页）</i>
      </div>
    </router-link>

    <div class="header">
      <h1>{{username}}的个人中心</h1>
    </div>
    
    <div>
      <ul>
        <router-link :to="{name:'myarticle'}">
          <li>我的文章</li>
        </router-link>
        <router-link :to="{name:'mylike'}">
          <li>我的点赞</li>
        </router-link>
        <router-link :to="{name:'mycollect'}">
          <li>我的收藏</li>
        </router-link>
      </ul>
    </div>

    <!--上面三个组件继承自同一个ArticleList的组件，使用props传递参数-->
    <hr/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default{
	name: "Profile",
  computed:{
    username:function(){
      return this.$store.state.user.username
    }
  }
}
</script>

<style scoped>
.profile{
	width: 100%;
}
.profile .header{
  padding: 10px 40px;
  height: 200px;
  line-height: 80px;
  background-image: url('../../assets/images/background.jpg');
  color: #333;
}
</style>