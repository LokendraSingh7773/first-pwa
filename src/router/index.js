import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'aboutUs',
      views: () => import('./views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'ContactUs',
      views: () => import('./views/ContactPage.vue')
    },
    {
      path: '/team',
      name: 'OurTeam',
      views: () => import('./views/OurTeam.vue')
    },

  ]
})

export default router
