import Vue from 'vue'
import Vuex from 'vuex'

//modules
import article from './modules/article.js'
import user from './modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		article: article,
		user: user
	}
})

export default store;