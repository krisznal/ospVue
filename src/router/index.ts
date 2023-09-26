import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Finance from '../views/Finance.vue'
import FiremanList from '../views/FiremanList.vue'
import Straz from '../views/Straz.vue'
import FinanceList from '../views/FinanceList.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/finance/add/:id',
      name: 'finance-add',
      component: Finance
    },
    {
      path: '/FinanceList/list/:id',
      name: 'FinanceList-list',
      component: FinanceList
    },
    {
      path: '/FiremanList/list',
      name: 'FiremanList-list',
      component: FiremanList
    },
    {
      path: '/fireman/add',
      name: 'fireman-add',
      component: Straz
    },
  ]
})

export default router
