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

    <!--确定登陆的基本信息，诸如日期、地区、国家，以及对于该网站所需要的Help-->
    <!--此类信息在登入网站时会自动获取并更新-->
    <!--<SideBar />

    <div class="content">
      <SearchBox /> 
      <Atlas />

      <div class="info">
        <div class="left">
          <Board />
        </div>
        <div class="right">
          <Profile />
        </div>
      </div>

      <Notice />
    </div>

    <Footer />
    -->

  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/main/TopMenu.vue'
//
//import TopBar from '@/components/main/TopBar.vue'
//import SideBar from '@/components/main/SideBar.vue'
//import SearchBox from '@/components/main/SearchBox.vue'
//import Atlas from '@/components/main/Atlas.vue'
//import Board from '@/components/main/Board.vue'
//import Menu from '@/components/main/Menu.vue'
//import Profile from '@/components/main/Profile.vue'
//import Notice from '@/components/main/Notice.vue'
//import Footer from '@/components/main/Footer.vue'

export default {
  name: 'Main',
  components: {
    TopMenu,
    //TopBar,
    //SideBar,
    //SearchBox,
    //Atlas,
    //Board,
    //Menu,
    //Profile,
    //Notice,
    //Footer,
  },
  data:function(){
    return {
      username:'',
      password:'',
    }
  },
  created:function(){
    var that = this
    //使用axios获取所有的Article的内容
    //然后映射到唯一的数据源Store上
    axios.get('/article/articles')
    .then(function(response){
      //console.log(response.data)
      that.$store.commit('initialArticles',response.data)
    }).catch(function(error){
      console.log(error)
    })
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
    },
  }
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
