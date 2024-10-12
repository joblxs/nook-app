import { createRouter, createWebHistory } from 'vue-router';
import { close, start } from '@/utils/nporgress'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../components/IndexHome.vue')
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