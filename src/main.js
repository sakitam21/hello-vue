import Vue from 'vue'
import App from './App.vue'

//vue-router
import router from './router/router.js'

//mock
import './mock/index.js'

//axios
import axios from 'axios'

//阿里巴巴矢量图标库
import '@/assets/icon/iconfont.css'

//store
import store from './store/store.js'

axios.defaults.baseURL = 'http://mockjs.com/api'

Vue.config.productionTip = false

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
