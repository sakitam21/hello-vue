<template>
  <div class="questionItem">
    <h1 style="padding-left: 30px;">QuestionItem Component</h1>

    <div class="question">
      <div class="header">
        <div class="author">{{question.question_author}}</div>
        <div class="date">发表于{{question.question_date}}</div>
      </div>

      <div class="content">
        {{question.question_content}}
      </div>

      <div class="tags">
        <div class="tagitem" v-for="(tag,index) in question.question_tag" v-bind:key="index">{{tag.tag_name}}</div>
      </div>
    </div>
    

    <div class="answer">
      <div class="num">
        共有{{question.answer_number}}个回答
      </div>
      <div class="answerItem" v-for="(answer,index) in question.answer_content" v-bind:key="index">
        <div class="answer_user">
          {{answer.username}}
        </div>
        
        <div class="answercontent">
          {{answer.answer_content}}
        </div>

        <div class="bottom">
          <div class="reply">回复</div>
          <div class="answer_date">
            发表于{{answer.answer_date}}
          </div>
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
	background-color: #f0f0f0;
}

.questionItem .question{
	background-color: #fff;
	border-radius: 8px;
	margin: 20px 0;
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
.questionItem .content{
	padding: 0 30px;
	font-size: 22px;
	font-weight: bold;
	height: 30px;
}
.questionItem .tags{
	padding-left: 30px;
	height: 40px;
	line-height: 20px;
}
.questionItem .tags .tagitem{
	padding: 0 8px;
	height: 20px;
	float: left;
	margin: 10px 10px 10px 0;
	font-size: 14px;
	background-color: rgba(153,204,204,0.2);
	border-radius: 4px;
	color: #008b8b;
}

.questionItem .answer{
	padding: 10px 30px 20px 30px;
	border-radius: 8px;
	background-color: #fff;
}
.answer .num{
	height: 40px;
	line-height: 40px;
	font-size: 18px;
	font-weight: bold;
}

.answer .answerItem{
	width: 100%;
	border: 2px solid #008b8b;
	margin-top: 10px;
	border-radius: 5px;
}

.answerItem .answer_user{
	padding-left: 10px;
	height: 40px;
	line-height: 40px;
}

.answerItem .answer_user{
	font-size: 18px;
	color: #008b8b;
}

.answer .answerItem .answercontent{
	font-size: 16px;
	text-indent: 2em;
}
.answerItem .bottom{
	height: 40px;
}
.answerItem .bottom .reply{
	padding-left: 10px;
	height: 40px;
	line-height: 40px;
	float: left;
}
.answerItem .bottom .answer_date{
	padding-left: 10px;
	height: 40px;
	line-height: 40px;
	float: left;
}
</style>