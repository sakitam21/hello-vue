<template>
	<div class="profile">
		<img src="@/assets/images/avatar.jpg" alt="avatar">
		<h1>Profile</h1>
	</div>
</template>

<script>
export default{
	name: "Profile"
}
</script>

<style scoped>
.profile{
	margin-top: 36px;
	height: 280px;
	width: 100%;
	padding: 10px;
	border: 2px solid #008b8b;
	border-radius: 5px;
	text-align: center;
	background-color: #f6f6f6;
}
.profile img{
	width: 60px;
	height: 60px;
	margin: 0 auto;
}
</style>