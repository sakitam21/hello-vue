<template>
  <div id="main">
    <!--确定这是一个什么类型的网站-->
    <!--资讯-->
    <header>
      <!--Advertisement-->
      <TopBar />
      <!--确定登陆的基本信息，诸如日期、地区、国家，以及对于该网站所需要的Help-->
      <SideBar />
    </header>

    <div class="content">
      <!--搜索框-->
      <SearchBox /> 
      <!--图集-->
      <Atlas />

      <div class="info">
        <div class="left">
          <Board />
        </div>
        <div class="center">
          <!--菜单栏-->
          <Menu />
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
//顶栏
import TopBar from '@/components/main/TopBar.vue'
import SideBar from '@/components/main/SideBar.vue'
//搜索框
import SearchBox from '@/components/main/SearchBox.vue'
//图集
import Atlas from '@/components/main/Atlas.vue'

import Board from '@/components/main/Board.vue'

//菜单栏
import Menu from '@/components/main/Menu.vue'

import Profile from '@/components/main/Profile.vue'

import Notice from '@/components/main/Notice.vue'

//底部栏
import Footer from '@/components/main/Footer.vue'

export default {
  name: 'Main',
  components: {
    TopBar,
    SideBar,
    SearchBox,
    Atlas,
    Board,
    Menu,
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
.info .center, .info .right{
  width: 28%;
  float: left;
}
</style>
