import {createMemoryHistory, createRouter} from 'vue-router'
const routes = [
    {
        path:'/',
        component:()=>import('@/views/home/index.vue')

    }
]
const router = createRouter({
    routes,
    history:createMemoryHistory()
})


export default router