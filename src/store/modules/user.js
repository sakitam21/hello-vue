const user = {
	state:{
		haslogin: false,  //是否登录成功
		hassignin: false, //是否出现登录的表单
        hassignup: false, //是否出现注册的表单
		avatar:"", //头像URL
		userid:0,
		username: "", //用户名
		password: "", //密码
	},
	mutations:{
		editlogin(state,user){
			state.haslogin=true
			state.userid=user.userid
			state.username=user.username
			state.password=user.password
		},
		editsignin(state){
			state.hassignin=!state.hassignin
		},
		editsignup(state){
			state.hassignup=!state.hassignup
		},
		cancelsignin(state){
			state.haslogin=false
			state.username=""
			state.password=""
		}
	}
}

export default user;