<template>
  <div class="searchbox">
    <div class="formbox">
      <form v-on:submit.prevent="alertKeyWord" class="myform">
        <input type="text" v-model="keyword" placeholder="搜索关键字">
		<button>Search</button>
      </form>
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
			if(this.keyword!==''){
				alert(this.keyword);
			}else{
				alert("请输入搜索关键字！")
			}
		}
	}
}
</script>

<style scoped>
.searchbox{
	width: 100%;
	height: 40px;
}
.searchbox .formbox{
	width: 100%;
	height: 40px;
}
.formbox .myform{
	height: 32px;
	width: 100%;
	margin: 3px 0;
	border: 1px solid #ccc;
	border-radius: 8px;
}

.myform input{
	width: 70%;
	height: 32px;
	border: none;
	padding: 0 10px;
	border-radius: 8px 0 0 8px;
	float: left;
}

.myform input:focus{
	outline: none;
}

.myform button{
	display: inline-block;
	height: 32px;
	padding: 0 10px;
	border:none;
	float: right;
	background-color: #ccc;
	color: #fff;
}
</style>















