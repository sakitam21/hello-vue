<template>
  <div class="sidebar">

    <ul class="ul">
      <li class="list">
          User
      </li>
      <span class="divide"></span>
      <li class="list">
          Country
      </li>
      <span class="divide"></span>
      <li class="list">
          Help
      </li>
      <span class="divide"></span>
      <li class="list">
          Location
      </li>
      <span class="divide"></span>
      <li class="list">
          Date
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
  }
}
</script>

<style scoped>
.sidebar{
  height: 34px;
  width: 100%;
  line-height: 34px;
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