<template>
  <div id="main">

    <header>
      <TopBar />
      <SideBar />
    </header>

    <div class="content">
      <!--搜索框-->
      <SearchBox /> 
      <!--菜单栏-->
      <Menu />
      <div class="menu-card">
        <router-view></router-view>
      </div>
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
//菜单栏
import Menu from '@/components/main/Menu.vue'
//底部栏
import Footer from '@/components/main/Footer.vue'

export default {
  name: 'Main',
  components: {
    TopBar,
    SideBar,
    SearchBox,
    Menu,
    Footer,
  }
}
</script>

<style scoped>
.menu-card{
  background-color: #008b8b;
  padding: 10px 10%;
}
</style>
