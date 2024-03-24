import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import QuestionView from '@/views/QuestionView.vue'
import axios from 'axios'

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
      component: PostView,
      meta: { requiresAuth: true }
    },
    {
      path: '/question/:questionId',
      name: 'questionPage',
      component: QuestionView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    let user = ''
    try {
      const response = await axios.get('http://localhost:5000/usermounted', {
        withCredentials: true
      })
      user = response.data
    } catch (error) {
      console.error(error)
    }

    if (user._id) {
      next()
    } else {
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

export default router
