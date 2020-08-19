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
    
    <div class="content">
      <div class="sidebar">
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

      <div class="allarticle">
        <router-view></router-view>
      </div>
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
  color: #fff;
}
.profile .content{
  width: 100%;
}
.content .sidebar{
  width: 16%;
  border: 1px solid #333;
  margin: 60px 4%;
  padding: 2%;
  float: left;
  border-radius: 5px;
}
.sidebar li{
  list-style: none;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #333;
}
.sidebar ul .router-link-active{
  color: #008b8b !important;
}
.content .allarticle{
  width: 50%;
  border: 1px solid #333;
  margin: 60px 4%;
  padding: 2%;
  float: left;
  border-radius: 5px;
}
</style>