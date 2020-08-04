import Mock from 'mockjs'
const Random = Mock.Random

import users from '../user/users.js'
import articletags from './articletags.js'

let articles = []

for(let i=1;i<=10;i++){
	let article ={
		article_id:i,
		article_title:"第"+i+"篇专栏文章",
		article_author:users[0].username,
		article_tag:[
			articletags[0],
			articletags[2]
		],
		article_date:Random.date(),
		article_content:Random.csentence(200,500),
		//isliked:true, //当前登录用户是否对该文章点赞
		like_number:3,
		like_users:[
			users[0],
			users[1],
			users[2]
		],
		comment_number:2,
		comment_content:[
			{
				comment_id:1,
				comment_content:Random.csentence(10,20),
				userid:users[0].userid,
				username:users[0].username,
				comment_date:Random.date()
			},
			{
				comment_id:2,
				comment_content:Random.csentence(20,30),
				userid:users[1].userid,
				username:users[1].username,
				comment_date:Random.date()
			}
		],
		collect_number:Random.natural(0,5)
	}
	articles.push(article);
}
for(let i=11;i<=20;i++){
	let article ={
		article_id:i,
		article_title:"第"+i+"篇专栏文章",
		article_author:users[1].username,
		article_tag:[
			articletags[i%2],
			articletags[i%3]
		],
		article_date:Random.date(),
		article_content:Random.csentence(200,500),
		like_number:1,
		like_users:[
			users[2],
		],
		comment_number:1,
		comment_content:[
			{
				comment_id:1,
				comment_content:Random.csentence(10,20),
				userid:users[2].userid,
				username:users[2].username,
				comment_date:Random.date()
			}
		],
		collect_number:Random.natural(0,5)
	}
	articles.push(article);
}

export default articles;