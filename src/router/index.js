import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import QuestionView from '@/views/QuestionView.vue'

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
      component: AboutView
    },
    {
      path: '/newPost',
      name: 'newPost',
      component: PostView
    },
    {
      path: '/question/:questionId',
      name: 'questionPage',
      component: QuestionView
    }
  ]
})

export default router
