import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";


//配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component:() => import("../components/index.vue")
    }
]

//返回router示例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

//导出路由
export default router
