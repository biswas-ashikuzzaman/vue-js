import AboutView from '@/views/AboutView.vue'
import Category from '@/views/Category.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import Product from '@/views/Product.vue'
import Index from '@/views/SinglePage/index.vue'
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
   {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
   {
    path: '/single',
    name: 'single',
    component: Index
  },
    {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router