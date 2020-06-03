/*
 * @Author: your name
 * @Date: 2020-06-03 11:45:36
 * @LastEditTime: 2020-06-03 17:42:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-1\entrance.js
 */
import Vue from 'vue';

// ElementUI
import ElementUI from 'element-ui';
Vue.use(ElementUI);
// ElementUI

// axios
import http from './src/http/request'

// element ui 框架进度条
import 'nprogress/nprogress.css'

//常用正则，方法
import * as utils from './src/utils/util';


Vue.config.productionTip = false

Vue.prototype.$utils = utils;
Vue.prototype.$http = http;
Vue.prototype.$bus = new Vue();

export default Vue;