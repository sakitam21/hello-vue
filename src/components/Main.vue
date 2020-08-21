<template>
  <div id="main">
    <header>
      <!--菜单栏-->
      <TopMenu />
    </header>

    <!--菜单对应内容-->
    <div class="menu-card">
      <router-view></router-view>
    </div>

    <!--登录表单-->
    <div class="login" v-if="hassignin" v-on:click="cancelsignin">
      <form v-on:submit.prevent="signIn" class="loginform" v-on:click="loginform">
        <h2>登录表单</h2>
        <div class="inputItem">
          <label for="username">username</label>
          <input type="text" v-model="username" id="username">
        </div>
        <div class="inputItem">
          <label for="password">password</label>
          <input type="text" v-model="password" id="password">
        </div>
        <button>signin</button>
        <p>【username：“root”，password：“password”】</p>
        <p>【username：“one”，password：“one”】</p>
        <p>【username：“two”，password：“two”】</p>
      </form>
    </div>

    <!--注册表单-->
    <div class="login" v-if="hassignup" v-on:click="cancelsignup">
      <form v-on:submit.prevent="signUp" class="loginform" v-on:click="loginform">
        <h2>注册表单(现不可用，未做数据持久化）</h2>
        <div class="inputItem">
          <label for="username">username</label>
          <input type="text" v-model="username" id="username">
        </div>
        <div class="inputItem">
          <label for="password">password</label>
          <input type="text" v-model="password" id="password">
        </div>
        <button>signup</button>
      </form>
    </div>

    <!--{{this.$store.state}}-->

    <Footer></Footer>

  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/main/TopMenu.vue'
import Footer from '@/components/main/Footer.vue'

import {getAllArticles,getAllQuestions,signin,signup} from '@/api/api.js'

export default {
  name: 'Main',
  components: {
    TopMenu,
    Footer,
  },
  data:function(){
    return {
      username:'',
      password:'',
    }
  },
  created:function(){

    var that = this
    console.log(getAllArticles);

    //使用axios获取所有的Article的内容
    //然后映射到唯一的数据源Store上
    axios.get(getAllArticles)
    .then(function(response){
      console.log(response)
      that.$store.commit('initialArticles',response.data)
    }).catch(function(error){
      console.log(error)
    })
    /*
    //使用axios获取所有的Article的内容
    //然后映射到唯一的数据源Store上
    axios.get('/article/articles')
    .then(function(response){
      //console.log(response.data)
      that.$store.commit('initialArticles',response.data)
    }).catch(function(error){
      console.log(error)
    })
    */

    axios.get(getAllQuestions)
    .then(function(response){
      console.log(response)
      //需要映射到question module
      that.$store.commit('initialQuestions',response.data)
    }).catch(function(error){
      console.log(error)
    })
    /*
    axios.get('/question/questions')
    .then(function(response){
      console.log(response.data)
      //需要映射到question module
      that.$store.commit('initialQuestions',response.data)
    }).catch(function(error){
      console.log(error)
    })
    */
  },
  computed:{
    hassignin:function(){ //是否弹出登录表单
      return this.$store.state.user.hassignin
    },
    hassignup:function(){ //是否弹出注册表单
      return this.$store.state.user.hassignup
    }
  },
  methods:{
    //阻止登录表单区域的事件冒泡
    loginform:function(event){
      event.stopPropagation();
    },
    cancelsignin:function(){ //取消登录
      this.$store.commit('editsignin')
      this.username=''
      this.password=''
    },
    cancelsignup:function(){ //取消注册
      this.$store.commit('editsignup')
      this.username=''
      this.password=''
    },
    //登录事件
    signIn:function(){
      const that = this;

      //登录事件
      axios.post(signin,{
        username:that.username,
        password:that.password
      })
      .then(function(response){
        //登录成功
        console.log(response)
        if(response.data){
          //登录成功
          var user={
            userid:response.data.userid,
            username:response.data.username,
            password:response.data.password
          }
          that.$store.commit('editlogin',user);
          //在登录之后需要确定哪些文章是已经登录的，需要多加一个属性isliked
        }else{
          alert("用户名或密码错误！")
        }
        that.cancelsignin();
      }).catch(function(error){
        //登录失败
        console.log(error)
        alert("登录失败！");
        that.cancelsignin();
      })

      /*登录事件
      axios.post('/user/signin',{
        username:that.username,
        password:that.password
      }).then(function(response){
        console.log(response.data)
        if(response.data){
          //登录成功
          var user={
            userid:response.data.userid,
            username:response.data.username,
            password:response.data.password
          }
          that.$store.commit('editlogin',user);
          //在登录之后需要确定哪些文章是已经登录的，需要多加一个属性isliked
        }else{
          alert("用户名或密码错误！")
        }
        that.cancelsignin();
      }).catch(function(error){
        console.log(error)
        alert("登录失败！");
        that.cancelsignin();
      })
      */
    },

    //注册事件
    signUp:function(){
      const that = this;

      //注册事件 caiyihong is a big pig
      axios.post(signup,{
        username:that.username,
        password:that.password
      })
      .then(function(response){
        //注册成功
        console.log(response)
        if(response.data){
          alert("注册成功")
        }else{
          alert("注册失败")
        }
        that.cancelsignup();
      }).catch(function(error){
        //注册失败
        console.log(error)
        alert("注册失败！");
        that.cancelsignup();
      })
    },

  },
}
</script>

<style scoped>
.main{
  width: 100%;
}
/*生成遮罩层*/
.login{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  z-index: 100;
}
.login .loginform{
  width: 440px;
  height: 220px;
  margin: 80px auto;
  padding: 30px 60px;
  background-color: #fff;
  border: 1px solid #008b8b;
  border-radius: 8px;
  text-align: center;
}
.login .loginform .inputItem{
  width: 100%;
  height: 30px;
  margin-top: 16px;
}
</style>
