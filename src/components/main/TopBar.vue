<template>
  <div class="topbar">
    <div class="logo">
      <div class="text">Hello Vue</div>
      <img src="@/assets/topbar/topbar.jpg" alt="logo" />
    </div>
    <div class="menu">
      <div class="text">menu</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar{
	height: 80px;
	width: 76%;
	padding:0 12%;
	background-color: #fff;
}
.topbar .logo, .topbar .menu{
	width: 50%;
	height: 80px;
	float: left;
}
.topbar .logo img{
	width: 80px;
	height: 80px;
	float: left;
}
.topbar .logo .text{
	display: inline-block;
	float: left;
	height: 80px;
	line-height: 80px;
	font-size: 30px;
}
.topbar .menu .text{
	display: inline-block;
	padding: 0 30px;
	height: 48px;
	float: right;
	border-radius: 5px;
	margin-top: 16px;
	background-color: #f6f6f6;
	line-height: 48px;
	text-align: center;
	font-weight: bold;
}
</style>
