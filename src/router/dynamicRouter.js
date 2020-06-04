/*
 * @Author: your name
 * @Date: 2020-06-03 11:45:36
 * @LastEditTime: 2020-06-04 16:24:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-1\src\router\dynamicRouter.js
 */
import http from '@/http/request';
import defaultRouter from './defaultRouter'
import store from '@/store'


// 重新构建路由对象
const menusMap = function (menu) {
    return menu.map(v => {
        const {
            path,
            name,
            component
        } = v
        const item = {
            path,
            name,
            component: () => import(`@/${component}`)
        }
        return item;
    })
}


// 获取路由
const addPostRouter = function (to, from, next, selfaddRoutes) {
    console.log("enter dynamicRouter")
    // axios 请求mock数据接口
    http.windPost('/mock/menu')
        .then(data => {
            console.log('mock 数据返回的菜单')
            console.log(data)
            // console.log(data.data.list)
            // 0: {path: "/add/article", name: "add-article", component: "modules/add/article/article"}
            // 1: {path: "/detail/article", name: "detail-article", component: "modules/detail/article/article"}
            // 2: {path: "/edit/article", name: "edit-article", component: "modules/edit/article/article"}
            defaultRouter[0].children.push(...menusMap(data.data.list)); //将返回的菜单push到静态路由列表中
            selfaddRoutes(defaultRouter); // 消除路由重复警告
            store.commit('hasRoute', true); //修改vuex 中保存'hasRoute'=true
            next({
                ...to,
                replace: true
            }) //进入下一个路由 替换当前路由
        })
}

export default addPostRouter;