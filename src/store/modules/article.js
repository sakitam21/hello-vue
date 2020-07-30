const article = {
	state:{
		articles:[],
	},
	mutations:{
		initialArticles(state,articles){
			state.articles=[...articles]
		},
		likeArticle(state,likemsg){
			console.log(likemsg)
			//需要修改相应的点赞数量以及点赞人
			//state.articles[index].like_number++
		}
	}
}

export default article;