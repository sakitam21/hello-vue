import Mock from 'mockjs'
const Random = Mock.Random

import users from '../user/users.js'
import articletags from './articletags.js'

let articles = []

for(let i=1;i<=10;i++){
	let article ={
		article_id:i,
		article_title:"第"+i+"篇专栏文章",
		article_author:users[i%3].username,
		article_tag:[
			articletags[i%2],
			articletags[i%3]
		],
		article_date:Random.date(),
		article_content:Random.csentence(200,500),
		isliked:true, //当前登录用户是否对该文章点赞
		like_number:3,
		like_users:[
			users[i%1],
			users[i%2],
			users[i%3]
		],
		comment_number:2,
		comment_content:[
			{
				comment_id:1,
				comment_content:Random.csentence(10,20),
				userid:users[i%2].userid,
				username:users[i%2].username
			},
			{
				comment_id:2,
				comment_content:Random.csentence(20,30),
				userid:users[i%1].userid,
				username:users[i%1].username
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
		article_author:users[i%3].username,
		article_tag:[
			articletags[i%2],
			articletags[i%3]
		],
		article_date:Random.date(),
		article_content:Random.csentence(200,500),
		isliked:false,//当前登录用户是否对该文章点赞
		like_number:1,
		like_users:[
			users[i%1],
		],
		comment_number:2,
		comment_content:[
			{
				comment_id:1,
				comment_content:Random.csentence(10,20),
				userid:users[i%2].userid,
				username:users[i%2].username
			},
			{
				comment_id:2,
				comment_content:Random.csentence(20,30),
				userid:users[i%1].userid,
				username:users[i%1].username
			}
		],
		collect_number:Random.natural(0,5)
	}
	articles.push(article);
}

export default articles;