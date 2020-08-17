const article = {
	state:{
		articles:[],
	},
	getters:{
		//获取我的文章
		myArticles:(state)=>(username)=>{
			var myarticles=[]
			for(let i=0;i<state.articles.length;i++){
				if(state.articles[i].article_author==username){
					myarticles.push(state.articles[i])
				}
			}
			return myarticles;
		},

		//获取我点赞的文章
		myLikedArticles:(state)=>(userid)=>{
			var myliked=[]
			for(let i=0;i<state.articles.length;i++){
				for(let j=0;j<state.articles[i].like_users.length;j++){
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

		//获取文章数量
		getArticleNum:state=>{
			return state.articles.length
		},

		//根据分类索引获取文章
		getArticlesByTag:(state)=>(tag)=>{
			if(tag==-1){
				//全部文章
				return state.articles
			}else if(tag==0){
				//近期点赞最多
				return state.articles
			}else if(tag==1){
				//近期收藏最多
				return state.articles
			}else if(tag==2){
				//近期评论最多
				return state.articles
			}else if(tag==3){
              //前端
              let allArticles=state.articles
              let tag_id=0
              let newArticles = []
              for(let i=0;i<allArticles.length;i++){
                for(let j=0;j<allArticles[i].article_tag.length;j++){
                  if(allArticles[i].article_tag[j].tag_id==tag_id){
                    newArticles.push(allArticles[i])
                    break;
                  }
                }
              }
              return newArticles;
			}else if(tag==4){
				//html5
              let allArticles=state.articles
              let tag_id=1
              let newArticles = []
              for(let i=0;i<allArticles.length;i++){
                for(let j=0;j<allArticles[i].article_tag.length;j++){
                  if(allArticles[i].article_tag[j].tag_id==tag_id){
                    newArticles.push(allArticles[i])
                    break;
                  }
                }
              }
              return newArticles;
			}else if(tag==5){
              //css3
              let allArticles=state.articles
              let tag_id=2
              let newArticles = []
              for(let i=0;i<allArticles.length;i++){
                for(let j=0;j<allArticles[i].article_tag.length;j++){
                  if(allArticles[i].article_tag[j].tag_id==tag_id){
                    newArticles.push(allArticles[i])
                    break;
                  }
                }
              }
              return newArticles;
			}else if(tag==6){
				//vue
              let allArticles=state.articles
              let tag_id=3
              let newArticles = []
              for(let i=0;i<allArticles.length;i++){
                for(let j=0;j<allArticles[i].article_tag.length;j++){
                  if(allArticles[i].article_tag[j].tag_id==tag_id){
                    newArticles.push(allArticles[i])
                    break;
                  }
                }
              }
              return newArticles;
			}else if(tag==7){
				//react
              let allArticles=state.articles
              let tag_id=4
              let newArticles = []
              for(let i=0;i<allArticles.length;i++){
                for(let j=0;j<allArticles[i].article_tag.length;j++){
                  if(allArticles[i].article_tag[j].tag_id==tag_id){
                    newArticles.push(allArticles[i])
                    break;
                  }
                }
              }
              return newArticles;
			}
		},
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