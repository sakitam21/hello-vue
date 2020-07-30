import Mock from 'mockjs'
const domain = 'http://mockjs.com/api'

import boardlist from './board/boardlist'
import users from './user/users'
import articles from './article/articles'

Mock.mock(`${domain}/boardlist`,'get',boardlist)

Mock.mock(`${domain}/user/signin`,'post',function(options){
	var username= JSON.parse(options.body).username
	var password= JSON.parse(options.body).password

	var isSignin = false
	for(var i=0;i<users.length;i++){
		var item=users[i]
		if(item.username==username&&item.password==password)
			isSignin = true
	}
	return isSignin
})

Mock.mock(`${domain}/article/articles`,'get',articles)