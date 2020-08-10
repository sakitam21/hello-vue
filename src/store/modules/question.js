const question = {
	state:{
		questions:[],
	},
	getters:{
		getQuestionByIndex:(state)=>(index)=>{
			return state.questions[index]
		},
	},
	mutations:{
		initialQuestions(state,questions){
			state.questions=[...questions]
		},
		writeAnswer(state,answer){
			let question_id=answer.question_id
			let answer_content=answer.answer_content
			state.questions[question_id].answer_content.push(answer_content)
			state.questions[question_id].answer_number= state.questions[question_id].answer_content.length
		}
	},
}

export default question;