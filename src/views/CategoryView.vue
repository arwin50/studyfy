<script setup>
import QuestionPost from '../components/QuestionPost.vue'
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import CategoryDescription from '../components/CategoryDescription.vue'

const route = useRoute()
let category = ref(route.params.category)
let posts = reactive([])

const fetchSubjectPosts = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/${category.value}/question`, {
      withCredentials: true
    })
    posts.splice(0, posts.length, ...response.data)
    console.log('post are', posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
onMounted(async () => {
  try {
    await fetchSubjectPosts()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
})

watch(
  () => route.params.category,
  async (newCategory) => {
    category.value = newCategory
    try {
      await fetchSubjectPosts()
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }
)
</script>

<template>
  <div class="flex flex-col min-h-full w-full items-center">
    <div class="w-full">
      <CategoryDescription />
    </div>
    <QuestionPost v-for="post in posts" :key="post._id" :post="post" />
  </div>
</template>

<style></style>
