import Mock from 'mockjs'
const Random = Mock.Random

import users from '../user/users.js'
import articletags from '../article/articletags.js'

let questions = []

for(let i=0;i<6;i++){
	let question = {
		question_id:i,
		question_author:users[1].username,
		question_tag:[
			articletags[0],
			articletags[2]
		],
		question_content:Random.csentence(20,50),
		question_date:Random.date(),
		answer_number:2,
		answer_content:[
			{
				answer_id:1,
				answer_content:Random.csentence(60,80),
				userid:users[0].userid,
				username:users[0].username,
				answer_date:Random.date()
			},
			{
				answer_id:2,
				answer_content:Random.csentence(100,120),
				userid:users[2].userid,
				username:users[2].username,
				answer_date:Random.date()
			},
		]

	}
	questions.push(question)
}

for(let i=6;i<10;i++){
	let question = {
		question_id:i,
		question_author:users[0].username,
		question_tag:[
			articletags[1],
			articletags[2]
		],
		question_content:Random.csentence(30,40),
		question_date:Random.date(),
		answer_number:1,
		answer_content:[
			{
				answer_id:1,
				answer_content:Random.csentence(20,30),
				userid:users[0].userid,
				username:users[0].username,
				answer_date:Random.date()
			}
		]

	}
	questions.push(question)
}

export default questions;