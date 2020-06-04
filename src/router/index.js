/*
 * @Author: your name
 * @Date: 2020-04-29 21:32:37
 * @LastEditTime: 2020-06-04 17:10:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin\src\router\index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// element ui 框架进度条
import NProgress from 'nprogress'

// 静态路由
import defaultRouter from './defaultRouter'
// 动态路由
import dynamicRouter from './dynamicRouter';

import store from '@/store';



const router = new VueRouter({
    routes: defaultRouter,
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        // keep-alive 返回缓存页面后记录浏览位置
        if (savedPosition && to.meta.keepAlive) {
            return savedPosition;
        }
        // 异步滚动操作
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    x: 0,
                    y: 0
                })
            }, 200)
        })
    }
})

// 消除路由重复警告
const selfaddRoutes = function (params) {
    // params  为重新添加后的新路由列表
    console.log("消除路由重复警告")
    router.matcher = new VueRouter().matcher;
    router.addRoutes(params);

}

// 进入路由页面
router.beforeEach((to, from, next) => {
    const {
        hasRoute
    } = store.state;
    NProgress.start();
    console.log('hasRoute---' + hasRoute)
    if (hasRoute) {
        console.log("enter router hasRoute=true")
        next()
    } else {
        console.log("enter router hasRoute=false")
        dynamicRouter(to, from, next, selfaddRoutes)
    }
})

// 离开当前路由页面
router.afterEach((to, from) => {
    NProgress.done();
    NProgress.remove();
})

export default router;