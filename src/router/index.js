import { createRouter, createWebHistory } from 'vue-router';
import { close, start } from '@/utils/nporgress'
import NotFound from '../components/error/404.vue';

const routes = [
    // 首页
    {
        path: '/',
        name: 'Index',
        component: () => import('../components/IndexHome.vue')
    },
    // 博客列表
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../components/blog/BlogHome.vue')
    },
    {
        path: '/posts',
        name: 'Posts',
        component: () => import('../components/blog/PostsHome.vue')
    },
    // 404页面
    {
        path: '/:catchAll(.*)', // 捕获所有未匹配的路由
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    start();
    next();
});

router.afterEach(() => {
    close()
})

export default router;