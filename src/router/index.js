import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePages.vue'


const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'aboutUs',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: () => import('../views/ContactPage.vue')
    },
    {
      path: '/team',
      name: 'OurTeam',
      component: () => import('../views/OurTeam.vue')
    },
  ]
})

export default router
