import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/home'

    },
    {
        path: '/home',
        component: () => import('@/views/home/home.vue'),
        children: [
            {
                path: '/home',
                redirect: '/home/index'
            },
            {
                path: '/home/index',
                component: () => import('@/views/home/index.vue')
            }
        ]

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