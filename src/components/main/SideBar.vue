<template>
<!--确定登陆的基本信息，诸如日期、地区、国家，以及对于该网站所需要的Help-->  
  <div class="sidebar">  
    <ul class="ul">
      <li class="list">
          User
      </li>
      <span class="divide"></span>
      <li class="list">
          <span class="iconfont icon-guojiapitchon"></span>&nbsp;Country
      </li>
      <span class="divide"></span>
      <li class="list">
          <span class="iconfont icon-help"></span>&nbsp;Help
      </li>
      <span class="divide"></span>
      <li class="list">
          <span class="iconfont icon-dizhi"></span>&nbsp;Location
      </li>
      <span class="divide"></span>
      <li class="list">
          <span class="iconfont icon-riqi1"></span>&nbsp;{{date}}
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
    
  },
  //计算属性
  computed:{
    //获取当前日期
    date:function(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
              month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
              strDate = "0" + strDate;
          }
          var currentdate = year + '-' + month + '-' + strDate;
          return currentdate;
    }
  }
}
</script>

<style scoped>
.sidebar{
  height: 34px;
  width: 100%;
  line-height: 34px;
  font-size: 16px;
  background-color: #f5f5f5;
}

.sidebar .ul{
  height: 34px;
  width: 88%;
  padding: 0 6%;
}
.sidebar .list{
  display: inline-block;
  padding: 0 30px;
  text-align: center;
  vertical-align: top;
  float: right;

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