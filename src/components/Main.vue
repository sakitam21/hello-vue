<template>
  <div id="main">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
    <header>
      <TopBar />
      <MenuBar />
    </header>
    
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TopBar from '@/components/main/TopBar.vue'
import MenuBar from '@/components/main/MenuBar.vue'

export default {
  name: 'Main',
  components: {
    //HelloWorld,
    TopBar,
    MenuBar,
  }
}
</script>

<style scoped>
.content{
  margin-top: 10px;
}
</style>
