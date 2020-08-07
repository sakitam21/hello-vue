<template>
  <div class="profile">
    <router-link :to="{name:'index'}">
      <div class="logo">
        <i>Async技术社区</i>
      </div>
    </router-link>

    <h1>Profile</h1>
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
	name: "Profile"
}
</script>

<style scoped>
.profile{
	width: 100%;
}
</style>