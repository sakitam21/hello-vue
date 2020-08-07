<template>
  <div class="topmenu">

    <router-link :to="{name:'index'}">
      <div class="logo">
        Async技术社区
      </div>
    </router-link>

    <ul class="ul">
      <router-link :to="{name:'index'}">
        <li class="list">
          首页
        </li>
      </router-link>
      <router-link :to="{name:'column'}">
        <li class="list">
          专栏
        </li>
      </router-link>
      <router-link :to="{name:'list3'}">
        <li class="list">
          LIST3
        </li>
      </router-link>
    </ul>

    <div class="search">
      <SearchBox />
    </div>

    <div class="user" v-if="!haslogin">
      <ul>
        <li class="list" v-on:click="showsignup">免费注册</li>
        <li class="list" v-on:click="showsignin">立即登录</li>
      </ul>
    </div>

    <div class="user" v-else>
      <div class="usericon" v-on:click="showMyprofile">
        {{this.$store.state.user.username}}
      </div>
      <div class="profile" v-if="showprofile" >
        profile
      </div>
    </div>

  </div>
</template>

<script>
//搜索框
import SearchBox from '@/components/main/SearchBox.vue'
export default{
  name: "TopMenu",
  components: {
    SearchBox
  },
  data: function() {
    return {
      showprofile:false,
    }
  },
  computed:{
    haslogin:function(){
      return this.$store.state.user.haslogin
    }
  },
  methods:{
    //弹出登录表单
    showsignin:function(){
      this.$store.commit('editsignin')
    },
    //弹出注册表单
    showsignup:function(){
      this.$store.commit('editsignup')
    },
    //显示我的个人信息
    showMyprofile:function(){
      this.showprofile=!this.showprofile
    },
  },
}
</script>

<style scoped>
.topmenu{
  height: 50px;
  width: 92%;
  border-top: 2px solid #008b8b;
  border-bottom: 2px solid #008b8b;
  padding: 0 4%;
}
.topmenu .logo{
  height: 46px;
  line-height: 46px;
  width: 14%;
  float: left;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0 8px;
}
.topmenu .ul{
  height: 32px;
  line-height: 32px;
  width: 20%;
  font-weight: bold;
  margin: 8px 0;
  float: left;
}
.topmenu .ul .list{
  display: inline-block;
  text-align: center;
  font-size: 18px;
  vertical-align: top;
  padding: 0 8px;
  margin: 0 10px;
  border-radius: 6px;
  letter-spacing: 2px;
}
.topmenu .list:hover{
  background-color: #f3f3f3;
}
.topmenu .ul a{
  display: inline-block;
  height: 40px;
  color: #939393;
}
/*动态menu*/
.topmenu .ul .router-link-active{
  color: #008b8b !important;
}
.topmenu .search{
  width: 30%;
  height: 40px;
  margin-top: 3px;
  margin-left: 4%;
  float: left;
  padding: 0 10px;
}
.topmenu .user{
  width: 24%;
  height: 48px;
  float: right;
  padding: 8px 0;
  color: #999;
}
.user .list{
  display: inline-block;
  vertical-align: top;
  text-align: center;
  font-size: 18px;
  line-height: 32px;
  float: right;
  padding: 0 16px;
  margin: 0 6px;
  border: 1px solid #333;
  border-radius: 4px;
  letter-spacing: 2px;
}
.user .list:last-child{
  color: #999;
}
.user .list:first-child{
  background-color: #008b8b;
  color: #fff;
}
.user .usericon{
  display: inline-block;
  vertical-align: top;
  text-align: center;
  font-size: 18px;
  line-height: 32px;
  float: right;
  padding: 0 16px;
  margin: 0 6px;
  border: 1px solid #333;
  border-radius: 4px;
  letter-spacing: 2px;
}
</style>