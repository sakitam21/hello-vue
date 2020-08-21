<template>
  <div class="pagination">
    <div class="buttonleft" v-on:click="subPage">《</div>

    <div class="container">
      <div class="list" v-bind:style="{left:pageinfo.left+'px'}">
        <div v-for="(page,index) in pageList" v-bind:key="index" v-bind:class="{listitem:true,lightpage:pageinfo.currentpage==index}">
          {{page}}
        </div>
      </div>
    </div>
    
    <div class="buttonright" v-on:click="addPage">》</div>
  </div>
</template>


<script>
export default{
  name:"Pagination",
  props:{
    //父组件向子组件传值，使用props
    pageinfo:{
      pagenum:Number,
      left:Number,
      currentpage:Number,
    }
  },
  data:function(){
    return {
      pageList:[],
      //pageList:[1,2,3,4,5,6,7,8,9,10],
      //currentListIndex:0,
      //left:0,
      //currentpage:0,
    }
  },
  created:function(){
    let num=this.pageinfo.pagenum/4
    for(let i=1;i<=num;i++){
      this.pageList.push(i)
    }
  },
  methods:{
    addPage:function(){
      this.$emit('switchpage','addPage')
    },
    subPage:function(){
      this.$emit('switchpage','subPage')
    },
  }
}
</script>

<style scoped>
.pagination{
	position: relative;
	display: inline-block;
	width: 562px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border: 1px solid #333;
	border-radius: 5px;
	font-weight: bold;
}
.pagination .container{
	position: relative;
	width: 400px;
	height: 40px;
	overflow: hidden;
	text-align: center;
	float: left;
}
.container .list{
	position: absolute;
	top: 0;
	left: 80px;
	height: 40px;
}
.list .listitem{
	width: 80px;
	height: 40px;
	float: left;
}
.list .lightpage{
	background-color: #008b8b;
	color: #f0f0f0;
}
.pagination .buttonleft{
	width: 80px;
	height: 40px;
	float: left;
	border-right:1px solid #333;
}
.pagination .buttonright{
	width: 80px;
	height: 40px;
	border-left:1px solid #333;
	float: left;
}
</style>