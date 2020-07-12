<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TopBar />
    <MenuBar />
    <p>Hello Vue</p>
  -->
  <!--告诉Vue Router在哪里渲染相应路径对应的组件-->
  <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TopBar from './components/main/TopBar.vue'
//import MenuBar from './components/main/MenuBar.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //TopBar,
    //MenuBar,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration: none;
  color: #000;
}
a:hover{
  font-weight: bold;
  letter-spacing: 2px;
}
</style>
