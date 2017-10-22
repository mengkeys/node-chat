// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueSocketio from 'vue-socket.io';
import VueRouter from 'vue-router'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import {ToastPlugin, LoadingPlugin, ConfirmPlugin} from 'vux'

Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);


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
