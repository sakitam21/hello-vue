import Mock from 'mockjs'
import boardlist from './board/boardlist'

import users from './user/users'

const domain = 'http://mockjs.com/api'
//console.log(boardlist);

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