<template>
  <div id="main">

    <header>
      <TopBar />
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
