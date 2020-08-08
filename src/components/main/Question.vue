<template>
  <div class="question">
    <h1>Question</h1>
    <!--{{questions}}-->
    <div class="questionItem" v-for="(question,index) in questions" v-bind:key="index" >
      <div class="top">
        <div class="author"><i>{{question.question_author}}</i></div>
        <div class="date">发布于{{question.question_date}}</div>
      </div>

      <div class="answerNum">{{question.answer_number}}回答</div>

      <div class="content" v-on:click="goQuestionItem(index)">{{question.question_content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  computed:{
    questions:function(){
      return this.$store.state.question.questions
    }
  },
  methods:{
    goQuestionItem:function(index){
      this.$router.push({name:'questionitem',params:{questionid:index}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question{
	padding: 30px 8%;
}

.question .questionItem{
	width: 100%;
	margin-top: 12px;
	border: 1px solid #333;
	border-radius: 5px;
}
.questionItem .top{
	width: 100%;
	height: 40px;
	line-height: 40px;
}
.questionItem .top .author{
	padding: 0 20px;
	height: 40px;
	float: left;
	font-weight: bold;
	font-size: 18px;
	color: #008b8b;
}
.questionItem .top .date{
	padding: 0 20px;
	margin-left: 10px;
	height: 40px;
	float: left;
}
.questionItem .answerNum{
	height: 30px;
	line-height: 30px;
	padding: 0 20px;
}
.questionItem .content{
	height: 40px;
	padding: 0 20px;
	line-height: 40px;
	font-size: 18px;
	font-weight: bold;
}
</style>
