// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueSocketio from 'vue-socket.io';
import VueRouter from 'vue-router'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import 'font-awesome/css/font-awesome.min.css'
import {ToastPlugin, LoadingPlugin, ConfirmPlugin} from 'vux'

Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);

const IndexDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let db = null;
if(!IndexDB){
	alert("你的浏览器不支持IndexedDB");
} else {
	const request = window.indexedDB.open("testDB", 2);

	request.onerror = function(event){
		console.log("打开DB失败", event);
	};
	request.onupgradeneeded   = function(event){
		console.log("Upgrading");
		global.db = event.target.result;
	};
	request.onsuccess  = function(event){
		console.log("成功打开DB");
		global.db = event.target.result;
	}
}

FastClick.attach(document.body);

Vue.config.productionTip = false;


Vue.use(VueSocketio, 'http://192.168.0.103:8001');

// this.$http 调用
/* eslint-disable no-new */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app-box');
