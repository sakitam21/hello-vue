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
	},
}

export default question;