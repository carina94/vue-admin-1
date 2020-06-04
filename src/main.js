/*
 * @Author: your name
 * @Date: 2020-06-03 11:45:36
 * @LastEditTime: 2020-06-04 15:34:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-1\src\main.js
 */
import Vue from '../entrance';
import App from './App.vue';
import router from './router';
import store from './store';
//淘宝弹性布局
import 'lib-flexible/flexible.js'
// 自定义指令
import '@/plugin/directive'
// 加载全局组件
import './components';


require('./mock/mock');

window.vm = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')