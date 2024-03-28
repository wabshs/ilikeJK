import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";


//配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import("../views/Index.vue"),
        redirect: 'index',
        children: [
            {path: 'index', name: 'Index', component: () => import('../views/pub/Welcome.vue')},
            {path: 'my/:id', name: 'My', component: () => import('../views/my/My.vue')},
            {path: 'edit/:id', name: 'Edit', component: () => import('../views/my/EditAboutMe.vue')},
            {path: 'article/:id', name: 'Article', component: () => import('../views/pub/Article.vue')},
            {
                path: 'createArticle/:id',
                name: 'CreateArticle',
                component: () => import('../views/pub/CreateArticle.vue')
            },
            {path: 'login', name: 'Login', component: () => import('../views/pub/Login.vue')}
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
