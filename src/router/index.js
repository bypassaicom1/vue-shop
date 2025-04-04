import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/index'

    },
    {
        path: '/index',
        component: () => import('@/views/home/index.vue')

    },
    {
        path: '/login',
        component: () => import('@/views/user/login.vue')

    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})


export default router