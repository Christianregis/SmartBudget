import {createRouter, createWebHistory} from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import TransactionsView from '@/views/TransactionsView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: TransactionsView,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
