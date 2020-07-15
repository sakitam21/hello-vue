<template>
  <div class="board">

    <div class="boardlist">
      <div class="title">
        <h2><i>BOARD LIST</i>&nbsp;&nbsp;></h2>
      </div>
      <ul>
        <li class="listitem" v-for="(item,index) in boardlist" :key="index">
          {{item.info}}
        </li>
      </ul> 
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Board',
  data: function() {
    return {
      boardlist: []
    }
  },
  created:function(){
    const that = this;
    axios.get('/boardlist')
    .then(function(response){
      console.log(response.data)
      that.boardlist=response.data;
    }).catch(function(error){
      console.log(error)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board{
  padding: 10px 5%;
}
.boardlist{
  width: 100%;
  padding: 10px 0;
  border-radius: 5px;
  font-size: 18px;
}
.boardlist .title{
  width: 100%;
  border-bottom: 4px solid #ccc;
  margin: 20px 0;
}
.boardlist .title i{
  color: #008b8b;
}
.boardlist li{
  list-style: none;
  border-bottom: 1px dotted #999;
  height: 30px;
  line-height: 30px;
}
</style>
