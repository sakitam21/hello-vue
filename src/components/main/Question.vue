<template>
  <div class="question">
    <h1>Question</h1>

    <div class="allTags">
      <ul>
        <!--在前端用函数分类-->
        <li v-on:click="allQuestions" v-bind:class="{tagitem:true,lightTag:currentTag==-1}">全部</li>
        <li v-for="(tag,index) in articletags" v-bind:key="index" v-on:click="classifyQuestion(tag.tag_id)" v-bind:class="{tagitem:true,lightTag:currentTag==index}">
          {{tag.tag_name}}
        </li>
      </ul>
    </div>

    <!--{{questions}}-->
    <div v-if="!isclassify">
      <div class="questionItem" v-for="(question,index) in questions" v-bind:key="index" >
        <div class="top">
          <div class="author"><i>{{question.question_author}}</i></div>
          <div class="date">发布于{{question.question_date}}</div>
        </div>

        <div class="answerNum">{{question.answer_number}}回答</div>

        <div class="content" v-on:click="goQuestionItem(index)">{{question.question_content}}</div>
      </div>
    </div>
    <div v-else>
      <div class="questionItem" v-for="(question,index) in classifyQuestions" v-bind:key="index" >
        <div class="top">
          <div class="author"><i>{{question.question_author}}</i></div>
          <div class="date">发布于{{question.question_date}}</div>
        </div>

        <div class="answerNum">{{question.answer_number}}回答</div>

        <div class="content" v-on:click="goQuestionItem(index)">{{question.question_content}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import articletags from '../../mock/article/articletags.js'
export default {
  name: 'Question',
  data:function(){
    return {
      articletags: articletags,
      isclassify:false, //是否分类
      newQuestions:[], //分类后的问题数组
      currentTag: -1,//当前标签索引
    }
  },
  computed:{
    classifyQuestions:function(){
      return this.newQuestions
    },
    questions:function(){
      return this.$store.state.question.questions
    }
  },
  methods:{
    goQuestionItem:function(index){
      this.$router.push({name:'questionitem',params:{questionid:index}})
    },
    //显示全部问题
    allQuestions:function(){
      this.isclassify=false
      this.currentTag=-1
    },

    //显示分类文章
    classifyQuestion:function(tag_id){
      //alert(tag_id);
      let allQuestions=this.questions
      this.newQuestions = []
      for(let i=0;i<allQuestions.length;i++){
        for(let j=0;j<allQuestions[i].question_tag.length;j++){
          if(allQuestions[i].question_tag[j].tag_id==tag_id){
            this.newQuestions.push(allQuestions[i])
            break;
          }
        }
      }
      console.log(this.newQuestions);
      this.isclassify=true
      this.currentTag=tag_id
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question{
	padding: 30px 8%;
}

.question .allTags{
  margin: 30px auto;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.allTags .tagitem{
  display: inline-block;
  padding: 0 30px;
  height: 30px;
  margin-right: 20px;
  background-color: #f0f0f0;
  color: #999;
  border-radius: 5px;
  vertical-align: top;
}
.allTags .lightTag{
  background-color: rgba(153,204,204,0.2);
  color: #008b8b;
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
