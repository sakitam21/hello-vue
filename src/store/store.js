import Vue from 'vue'
import Vuex from 'vuex'

//modules
import article from './modules/article.js'
import question from './modules/question.js'
import user from './modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		article: article,
		question: question,
		user: user,
	}
})

export default store;