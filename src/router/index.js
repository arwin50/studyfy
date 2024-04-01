import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import QuestionView from '@/views/QuestionView.vue'
import axios from 'axios'
import EditPostView from '@/views/EditPostView.vue'
import CategoryView from '@/views/CategoryView.vue'
import UserQuestionsView from '@/views/UserQuestionsView.vue'
import { usePostStore } from '@/stores/postStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:category/question',
      name: 'categoryPage',
      component: CategoryView
    },
    {
      path: '/myquestions',
      name: 'myquestions',
      component: UserQuestionsView,
      meta: { requiresAuth: true }
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
      path: '/:category/question/:questionId',
      name: 'questionPage',
      component: QuestionView
    },
    {
      path: '/:category/question/:questionId/edit',
      name: 'editPost',
      component: EditPostView,
      meta: { requiresAuth: true }
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
      if (to.name === 'editPost') {
        const questionId = to.params.questionId
        const category = to.params.category
        const response = await axios.get(`http://localhost:5000/${category}/question/${questionId}`)
        const post = response.data
        if (post.author._id === user._id) {
          next()
        } else {
          next({ name: 'home' })
        }
      } else {
        next()
      }
    } else {
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

export default router
