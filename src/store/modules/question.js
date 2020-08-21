const question = {
	state:{
		questions:[],
	},
	getters:{
		getQuestionByIndex:(state)=>(index)=>{
			return state.questions[index]
		},
		//获取问题数量
		getQuestionNum:state=>{
			return state.questions.length
		},
	},
	mutations:{
		initialQuestions(state,questions){
			state.questions=[...questions]
		},
		writeAnswer(state,answer){
			let question_id=answer.question_id-1
			let answer_content=answer.answer_content
			state.questions[question_id].answer_content.push(answer_content)
			state.questions[question_id].answer_number= state.questions[question_id].answer_content.length
		},
		addQuestion(state,newquestion){
			state.questions=[...state.questions,newquestion]
		}
	},
}

export default question;