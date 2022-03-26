import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
//全局组件
import pageContainer from '@/components/global/page-container.vue'
import cuCustom from '@/common/colorui/components/cu-custom.vue'
import $util from '@/common/util.js'
import store from './store'
import $routers from '@/common/routers.js'
import * as $request from '@/common/request/api/'

// 头部
Vue.component('cu-custom', cuCustom)
// 页面容器
Vue.component('page-container', pageContainer)


Vue.prototype.$request = $request
Vue.prototype.$util = $util
Vue.prototype.$routers = $routers
Vue.prototype.$store = store

Vue.use(uView)
uni.$u.config.unit = 'rpx'
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})

app.$mount()
