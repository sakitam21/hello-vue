const article = {
	state:{
		articles:[],
	},
	getters:{
		//获取我点赞的文章
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
		},
		//获取我收藏的文章
		myCollectedArticles:(state)=>(userid)=>{
			var mycollected=[]
			for(var i=0;i<state.articles.length;i++){
				for(var j=0;j<state.articles[i].collect_users.length;j++){
					if(state.articles[i].collect_users[j].userid==userid){
						mycollected.push(state.articles[i].article_id);
						break;
					}
				}
			}
			return mycollected;
		},

		//根据Id获取文章内容
		getArticleByIndex:(state)=>(index)=>{
			console.log(state.articles[index])
			return state.articles[index];
		},

		getArticleNum:state=>{
			return state.articles.length
		}
	},
	mutations:{
		initialArticles(state,articles){
			state.articles=[...articles]
		},

		//点赞
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
		},

		//收藏
		collectArticle(state,collectmsg){
			console.log(collectmsg)
			//需要修改相应的收藏数量以及收藏人
			//判断该文章是否已经被该登录人收藏
			if(collectmsg.iscollected){
				//已经收藏了
				state.articles[collectmsg.index].collect_number--
				for(var i=0;i<state.articles[collectmsg.index].collect_users.length;i++){
					if(state.articles[collectmsg.index].collect_users[i].userid==collectmsg.user.userid){
						state.articles[collectmsg.index].collect_users.splice(i,1)
						break;
					}
				}
			} else {
				//没收藏
				state.articles[collectmsg.index].collect_number++
				state.articles[collectmsg.index].collect_users.push(collectmsg.user)
			}
		},

		//添加文章
		addArticle(state,newarticle){
			state.articles=[...state.articles,newarticle]
		},

		//写评论
		writeComment(state,comment){
			let article_id=comment.article_id
			let comment_content=comment.comment_content
			state.articles[article_id].comment_content.push(comment_content)
			state.articles[article_id].comment_number= state.articles[article_id].comment_content.length
		},
	},


}

export default article;