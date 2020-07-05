import Vue from 'vue'
import App from './App'
import api from './api/index.js'
import status from './components/status/status.vue'

Vue.component('header-status',status) //全局注册头部状态栏组件
Vue.config.productionTip = false
Vue.prototype.request = api
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
