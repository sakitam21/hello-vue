<template>
  <div class="addQuestion">
    <h1>addQuestion</h1>
    <form v-on:submit.prevent="addQuestion" class="addform">
      <h2>添加问题表单</h2>
      <div class="inputItem">
        <label for="content">Content</label>
        <textarea type="text" v-model="content" id="content" placeholder="Add Article Content"></textarea>
      </div>
      <div class="inputItem">
        <p>选择标签</p>
        <input type="checkbox" id="html" value="0" v-model="checkedTags">
        <label for="html">html</label>
        <input type="checkbox" id="css" value="1" v-model="checkedTags">
        <label for="css">css</label>
        <input type="checkbox" id="js" value="2" v-model="checkedTags">
        <label for="js">js</label>
        <input type="checkbox" id="vue" value="3" v-model="checkedTags">
        <label for="vue">vue</label>
        <input type="checkbox" id="react" value="4" v-model="checkedTags">
        <label for="react">react</label>
      </div>  
      <button>提交</button>
    </form>
    
    <div>{{content}}</div>
    <div>{{checkedTags}}</div>
  </div>
</template>

<script>
import axios from 'axios'
import articletags from '../../mock/article/articletags.js'
import {addQuestion} from '@/api/api.js'
export default{
 name:'AddQuestion',
 data:function(){
    return {
      content:'', //问题内容
      checkedTags:[], //选择的标签
    }
  },
  methods:{
    addQuestion:function(){
      //需要提交一个Action请求
      let that = this
      var question_id = this.$store.getters.getQuestionNum
      var username = this.$store.state.user.username
      var question_tag=[]
      for(let i=0;i<this.checkedTags.length;i++){
        let index = parseInt(this.checkedTags[i])
        question_tag.push(articletags[index])
      }
      var newquestion={
        question_id:question_id,
        question_author:username,
        question_tag:question_tag,
        question_date:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
        question_content:that.content,
        answer_number:0,
        answer_content:[]
      }

      axios.post(addQuestion,{
        question_id:question_id,
        question_author:username,
        question_tag:question_tag,
        question_date:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
        question_content:that.content,
      }).then(function(response){
        if(response.data){
          that.$store.commit('addQuestion',newquestion)
          alert("问题提交成功！")
        }else{
          alert("问题提交失败！")
        }
      }).catch(function(error){
        console.log(error)
        alert("问题提交失败！")
      })

      /*
      //console.log(newquestion)
      this.$store.commit('addQuestion',newquestion)
      if(this.$store.getters.getQuestionNum==question_id+1){
        //添加成功
        alert("问题提交成功！")
      }else{
        //添加失败
        alert("问题提交失败！")
      }
      */

      //跳转页面
      this.$router.push({name:'question'})
    },
  },
}
</script>

<style scoped>

</style>