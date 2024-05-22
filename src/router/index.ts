import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/defectList',
        name: 'defectList',
        component: () => import('@/components/cart/ShowItem.vue'),
        props: {item: {}}
    },
    {
        path: '/defectDetail',
        name: 'defectDetail',
        component: () => import('@/components/defectDetail/DefectDetail.vue'),
        props: {item: {}}
    }
]
})

export default router
