import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import Dashboard from '../views/DashboardView.vue'

const routes = [
   { path: '/', component: Login },
   { path: '/register', component: Register },
   { path: '/dashboard', component: Dashboard },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
