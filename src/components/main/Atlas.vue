<template>
	<div class="atlas">
		<h1>《&nbsp;&nbsp;&nbsp;&nbsp;atlas&nbsp;&nbsp;&nbsp;&nbsp;》</h1>
		<div class="imgs">
			<img src="@/assets/a_01.jpg" alt="a_01">
			<img src="@/assets/a_02.jpg" alt="a_02">
			<img src="@/assets/a_05.jpg" alt="a_02">
			<img src="@/assets/a_03.jpg" alt="a_02">
			<img src="@/assets/a_06.jpg" alt="a_02">
			<img src="@/assets/a_04.jpg" alt="a_02">
		</div>
	</div>
</template>

<script>
export default{
	name:"Atlas"
}
</script>

<style scoped>
.atlas{
	background-color: #f5f5f5;
	color: #f5f5f5;
	text-align: center;
	height: 600px;
}
.atlas h1{
	background-color: #008b8b;
}
.atlas img{
	height: 240px;
	width: 320px;
	margin: 20px 30px 0 30px;
	float: center;
	border-radius: 8px;
}
</style>