const article = {
	state:{
		articles:[],
	},
	getters:{
		myLikedArticles:(state)=>(userid)=>{
			var myliked=[]
			for(var i=0;i<state.articles.length;i++){
				for(var j=0;j<state.articles[i].like_users.length;j++){
					if(state.articles[i].like_users[j].userid==userid){
						myliked.push(state.articles[i].article_id);
						break;
					}
				}
			}
			return myliked;
		}
	},
	mutations:{
		initialArticles(state,articles){
			state.articles=[...articles]
		},

		likeArticle(state,likemsg){
			console.log(likemsg)
			//需要修改相应的点赞数量以及点赞人
			//判断该文章是否已经被该登录人点赞
			if(likemsg.isliked){
				//已经点赞了
				state.articles[likemsg.index].like_number--
				for(var i=0;i<state.articles[likemsg.index].like_users.length;i++){
					if(state.articles[likemsg.index].like_users[i].userid==likemsg.user.userid){
						state.articles[likemsg.index].like_users.splice(i,1)
						break;
					}
				}
			} else {
				//没点赞
				state.articles[likemsg.index].like_number++
				state.articles[likemsg.index].like_users.push(likemsg.user)
			}
			//state.articles[index].like_number++
		}
	}
}

export default article;