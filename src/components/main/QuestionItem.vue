<template>
  <div class="questionItem">
    <h1>QuestionItem</h1>

    <div class="header">
      <div class="author">{{question.question_author}}</div>
      <div class="date">发表于{{question.question_date}}</div>
    </div>

    <div class="tags">
      <div class="tagitem" v-for="(tag,index) in question.question_tag" v-bind:key="index">{{tag.tag_name}}</div>
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

.questionItem .header{
	width:100%;
	height: 40px;
	line-height: 40px;
}
.questionItem .header .author{
	padding: 0 30px;
	height: 40px;
	color: #008b8b;
	font-size: 22px;
	float: left;
}
.questionItem .header .date{
	padding: 0 30px;
	height: 40px;
	float: left;
}
.questionItem .tags{
	padding-left: 30px;
	height: 30px;
	line-height: 30px;
}

.questionItem .tags .tagitem{
	width: 56px;
	height: 30px;
	float: left;
	margin-right: 10px;
	background-color: rgba(153,204,204,0.2);
	border-radius: 4px;
	line-height: 30px;
	text-align: center;
	color: #008b8b;
}
</style>