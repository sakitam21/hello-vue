const user = {
	state:{
		haslogin: false,
		hassignin: false, //是否出现登录的表单
        hassignup: false, //是否出现注册的表单
		avatar:"", //头像URL
		username: "", //用户名
		password: "", //密码
	},
	mutations:{
		increment(){
			//state
		},
		editsignin(state){
			state.hassignin=!state.hassignin
		},
		editsignup(state){
			state.hassignup=!state.hassignup
		}

	}
}

export default user;