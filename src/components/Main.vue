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

    <!--确定登陆的基本信息，诸如日期、地区、国家，以及对于该网站所需要的Help-->
    <!--此类信息在登入网站时会自动获取并更新-->
    <SideBar />

    <div class="content">
      <!--搜索框-->
      <SearchBox /> 
      <!--图集-->
      <Atlas />

      <div class="info">
        <div class="left">
          <Board />
        </div>
        <div class="right">
          <Profile />
        </div>
      </div>

      <!--Important Things-->
      <Notice />
      
    </div>

    <Footer />

  </div>
</template>

<script>
import TopMenu from '@/components/main/TopMenu.vue'
//顶栏
//import TopBar from '@/components/main/TopBar.vue'
import SideBar from '@/components/main/SideBar.vue'
//搜索框
import SearchBox from '@/components/main/SearchBox.vue'
//图集
import Atlas from '@/components/main/Atlas.vue'

import Board from '@/components/main/Board.vue'

//菜单栏
//import Menu from '@/components/main/Menu.vue'

import Profile from '@/components/main/Profile.vue'

import Notice from '@/components/main/Notice.vue'

//底部栏
import Footer from '@/components/main/Footer.vue'

export default {
  name: 'Main',
  components: {
    TopMenu,
    //TopBar,
    SideBar,
    SearchBox,
    Atlas,
    Board,
    //Menu,
    Profile,
    Notice,
    Footer,
  }
}
</script>

<style scoped>
.info{
  width: 100%;
  height: 400px;
}
.info .left{
  width: 40%;
  float: left;
}
.info .right{
  width: 50%;
  float: left;
}
</style>
