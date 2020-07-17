import Vue from 'vue'
import App from './App.vue'

//vue-router
import router from './router/router.js'

//mock
import './mock/index.js'

//axios
import axios from 'axios'
axios.defaults.baseURL = 'http://mockjs.com/api'

//阿里巴巴矢量图标库
import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
