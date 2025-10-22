import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import StreamersPage from '../pages/StreamersPage.vue'

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
  }
  // ... other routes ...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router