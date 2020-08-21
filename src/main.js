import Vue from 'vue'
import App from './App.vue'

//vue-router
import router from './router/router.js'

//mock
import './mock/index.js'

//axios
import axios from 'axios' // eslint-disable-line no-unused-vars

//阿里巴巴矢量图标库
import '@/assets/icon/iconfont.css'

//store
import store from './store/store.js'

//axios.defaults.baseURL = 'http://mockjs.com/api'

//路由跳转后回到顶部
router.afterEach((to,from,next) => { // eslint-disable-line no-unused-vars
    window.scrollTo(0,0);
});

Vue.config.productionTip = false

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
