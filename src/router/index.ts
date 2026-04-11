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

  // On utulise name au lieu de path pour faire la redirection, cela nous permet de changer le path de la page 404 sans avoir a changer la redirection (Nb: On peut aussi definir des params avec params: { id: 123 } et les recuperer dans la page de destination avec route.params.id )
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'NotFound' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
