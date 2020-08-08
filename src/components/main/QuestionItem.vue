<template>
  <div class="questionItem">
    <h1>QuestionItem</h1>
    
    <div class="header">
      <div class="author">{{question.question_author}}</div>
      <div class="date">{{question.question_date}}</div>
    </div>

    <div class="content">
      {{question.question_content}}
    </div>

    <div class="answer">
      <div class="num">
        共有{{question.answer_number}}个回答
      </div>
      <div class="answerItem" v-for="(answer,index) in question.answer_content" v-bind:key="index">
        <div class="top">
          <div class="answer_user">
            {{answer.username}}
          </div>
          <div class="answer_date">
            {{answer.answer_date}}
          </div>
        </div>
        <div class="answercontent">
          {{answer.answer_content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'QuestionItem',
  computed:{
	question:function(){
      var index = this.$route.params.questionid
      return this.$store.getters.getQuestionByIndex(index)
    },
  }
}
</script>

<style scoped>
.questionItem{
	padding: 30px 8%;
}
</style>