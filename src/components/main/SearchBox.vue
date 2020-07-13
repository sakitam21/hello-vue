<template>
  <div class="searchbox">
    <div class="formbox">
      <form v-on:submit.prevent="alertKeyWord" class="myform">
        <input type="text" v-model="keyword" placeholder="Edit keyword">
		<button>Search</button>
      </form>
      <div class="store">Store</div>
	</div>
  </div>
</template>

<script>
export default{
	name: "SearchBox",
	data: function(){
		return {
			keyword:''
		}
	},
	methods:{
		alertKeyWord:function(){
			alert(this.keyword);
		}
	}
}
</script>

<style scoped>
.searchbox{
	width: 100%;
	height: 150px;
	background-color: #fff;
	border:1px solid #fff;
}

.searchbox .formbox{
	width: 720px;
	height: 100px;
	margin: 30px auto 20px auto;
}

.formbox .myform{
	height: 36px;
	width: 600px;
	margin: 20px 0;
	border: 2px solid #000;
	border-radius: 8px;
	float: left;
}

.myform input{
	width: 520px;
	height: 36px;
	border: none;
	padding: 0 10px;
	border-radius: 8px 0 0 8px;
}

.myform input:focus{
	outline: none;
}

.myform button{
	width: 60px;
	height: 36px;
	border:none;
	background-color: #000;
	color: #fff;
}

.formbox .store{
	width: 60px;
	height: 40px;
	float: left;
	margin: 20px;	
	line-height: 40px;
	text-align: center;
}

</style>















