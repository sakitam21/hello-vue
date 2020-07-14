<template>
  <div class="board">
    <!--
    <div class="boardlist">
      <div class="listitem" v-for="(item,index) in boardlist" :key="index">
        <img v-bind:src="item.imgurl">
        {{item.imginfo}}
      </div>
    </div>
    -->
    <p>
    Experts disagree on how to overcome the danger. Hooper (Richard Dreyfuss), a wisecracking academic, prefers brainy methods; Quint (Robert Shaw), a heavydrinking shark hunter, opts for brawn. Even in a film packed with memorable dialogue, Quint’s description of being torpedoed during the second world war, with its grim mortality statistics, stands out: “So, 1,100 men went into the water; 316 men come out. The sharks took the rest.”
    </p>
    <p>
    Sadly, it will take more than three misfits in a ramshackle vessel to beat the virus. Metaphorically speaking, “You’re gonna need a bigger boat.” Still, quarantine is another chance to enjoy Mr Spielberg’s yarn, albeit with an after-bite. For many, its legacy was a lifelong fear of the sea; for some, covid-19 may bequeath a lingering queasiness about the world outside.
    </p>
    <p>
    Experts disagree on how to overcome the danger. Hooper (Richard Dreyfuss), a wisecracking academic, prefers brainy methods; Quint (Robert Shaw), a heavydrinking shark hunter, opts for brawn. Even in a film packed with memorable dialogue, Quint’s description of being torpedoed during the second world war, with its grim mortality statistics, stands out: “So, 1,100 men went into the water; 316 men come out. The sharks took the rest.”
    </p>
    <p>
    Sadly, it will take more than three misfits in a ramshackle vessel to beat the virus. Metaphorically speaking, “You’re gonna need a bigger boat.” Still, quarantine is another chance to enjoy Mr Spielberg’s yarn, albeit with an after-bite. For many, its legacy was a lifelong fear of the sea; for some, covid-19 may bequeath a lingering queasiness about the world outside.
    </p>
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
</style>
