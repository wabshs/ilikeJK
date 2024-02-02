import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";


//配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component:() => import("../views/Index.vue"),
        redirect: 'index',
        children: [
            {path: 'index',name: 'Index',component:() => import('../views/pub/Welcome.vue')}
        ]
    }
]

//返回router示例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

//导出路由
export default router
