<template>
  <div class="menu">

    <ul class="ul">
      <router-link :to="{name:'list1'}">
        <li class="list">
          LIST1
        </li>
      </router-link>
      <span class="divide"></span>
      <router-link :to="{name:'list2'}">
        <li class="list">
          LIST2
        </li>
      </router-link>
      <span class="divide"></span>
      <router-link :to="{name:'list3'}">
        <li class="list">
          LIST3
        </li>
      </router-link>
    </ul>

    <!--菜单内容-->
    <div class="menu-card">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default{
  name: "Menu",
  data: function() {
    return {

    }
  }
}
</script>

<style scoped>
.menu{
  height: 48px;
  width: 100%;
  margin: 36px 0;
  line-height: 48px;
  /*background-color: #f3f3f3;*/
}

.menu .ul{
  height: 48px;
  width: 80%;
  padding: 0 10%;
}
.menu .list{
  display: inline-block;
  text-align: center;
  font-size: 18px;
  vertical-align: top;
}
.menu a{
  display: inline-block;
  height: 40px;
}
.menu .divide{
  display: inline-block;
  vertical-align: top;
  height: 16px;
  width: 2px;
  border-radius: 2px;
  background-color: #999;
  margin: 16px 20px;
}
/*动态menu*/
.router-link-exact-active{
  border-bottom: 4px solid #ccc;
  font-weight: bold;
  letter-spacing: 2px;
  color: #008b8b;
}
.menu-card{
  padding: 0 10%;
}
</style>