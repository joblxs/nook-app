import { createRouter, createWebHistory } from 'vue-router';
import { close, start } from '@/utils/nporgress'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../components/IndexHome.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../components/blog/BlogHome.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(() => {
    start()
})

router.afterEach(() => {
    close()
})

export default router;