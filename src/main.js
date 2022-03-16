import Vue from 'vue'
import App from './App'

//全局组件
import pageContainer from '@/components/global/page-container.vue'

Vue.component('page-container', pageContainer)

import * as $request from '@/common/request/api/'

Vue.prototype.$request = $request

import store from './store'

Vue.prototype.$store = store

App.mpType = 'app'
const app = new Vue({
	store,
	...App
})

app.$mount()
