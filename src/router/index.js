import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import StreamersPage from '../pages/StreamersPage.vue'
import RulesPage from '@/pages/RulesPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/streamers',
    name: 'Streamers',
    component: StreamersPage
  },
  {
    path: '/rules',
    name: 'Rules',
    component: RulesPage
  }
  // ... other routes ...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router