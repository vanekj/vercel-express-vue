import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/DefaultView.vue')
    }
  ]
})

export default router
