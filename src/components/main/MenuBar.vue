<template>
  <div class="menubar">

    <ul class="ul">
      <li class="list">
        <router-link :to="{name:'board'}">
          Board
        </router-link>
      </li>
      <span class="divide"></span>
      <li class="list">
        <router-link :to="{name:'list2'}">
          List2
        </router-link>
      </li>
      <span class="divide"></span>
      <li class="list">
        <router-link :to="{name:'list3'}">
          List3
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: "MenuBar",
  data: function() {
    return {

    }
  },
  computed: {
    listId:function(){
      var listId=this.$route.params.listId;

      return listId;
    }
  }
}
</script>

<style scoped>
.menubar{
  height: 48px;
  width: 100%;
  line-height: 48px;
  background-color: #f3f3f3;
}

.menubar .ul{
  height: 48px;
  width: 88%;
  padding: 0 6%;
}
.menubar .list{
  display: inline-block;
  padding: 0 20px;
  text-align: center;
  vertical-align: top;
}
.menubar .divide{
  display: inline-block;
  vertical-align: top;
  height: 16px;
  width: 2px;
  border-radius: 2px;
  background-color: #000;
  margin-top: 16px;
}
/*动态menubar*/
.router-link-exact-active{
  border-bottom: 2px solid #000;
}
</style>