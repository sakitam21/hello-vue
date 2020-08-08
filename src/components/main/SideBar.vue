<template>
<!--确定登陆的基本信息，诸如地区、国家，以及对于该网站所需要的Help和开发日志-->  
  <div class="sidebar">  
    <ul class="ul">
      <li class="list">
        我的文章
      </li>
      <span class="divide"></span>
      <li class="list">
        我的喜欢
      </li>
      <span class="divide"></span>
      <li class="list">
        我的收藏
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: "SideBar",
  data: function() {
    return {

    }
  },
  //实例创建时执行的操作
  created:function(){
    
  }
}
</script>

<style scoped>
.sidebar{
  height: 34px;
  width: 100%;
  line-height: 34px;
  font-size: 14px;
  background-color: #fafafa;
}
.sidebar .ul{
  height: 34px;
  width: 92%;
  padding: 0 4%;
}
.sidebar .list{
  display: inline-block;
  padding: 0 20px;
  text-align: center;
  vertical-align: top;
  float: right;
}
.sidebar .list:hover{
  font-weight: bold;
}
.sidebar .divide{
  display: inline-block;
  vertical-align: top;
  height: 12px;
  width: 2px;
  border-radius: 2px;
  background-color: #999;
  margin-top: 11px;
  float: right;
}
</style>