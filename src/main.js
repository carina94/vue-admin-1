/*
 * @Author: your name
 * @Date: 2020-06-03 11:45:36
 * @LastEditTime: 2020-06-03 18:39:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-1\src\main.js
 */
import Vue from '../entrance';
import App from './App.vue';
import router from './router';
import store from './store';
//
import 'lib-flexible/flexible.js'
import '@/plugin/directive'
// 加载全局组件
import './components';

require('./mock/mock');

window.vm = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')