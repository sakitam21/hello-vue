<template>
  <div class="board">
    <h1>Board</h1>
    <div class="mainMsg">
      <div class="liItem">
        <ul class="ul">
          <li>liItem1</li>
          <li>liItem2</li>
          <li>liItem3</li>
          <li>liItem4</li>
          <li>liItem5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board{
	background-color: #f6f6f6;
	padding: 0 8%;
}

.board .mainMsg{
	height: 340px;
	width: 100%;
}

.mainMsg .liItem{
	width: 500px;
	height: 340px;
	float: left;
	background-image: url('../../assets/boardbg.jpg');
	background-size: 100% 100%;
}

.liItem ul{
	margin: 60px 80px;
	width: 300px;
	height: 180px;
	font-size: 20px;
	text-align: center;
}
</style>
