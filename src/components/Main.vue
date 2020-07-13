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
    </div>

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

export default {
  name: 'Main',
  components: {
    TopBar,
    SideBar,
    SearchBox,
    Menu,   
  }
}
</script>

<style scoped>

</style>
