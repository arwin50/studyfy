<script setup>
import NavigationBar from './components/NavigationBar.vue'
import { reactive } from 'vue'
import QuestionPost from './components/QuestionPost.vue'
import { onMounted } from 'vue'
import axios from 'axios'
import { defaultPosts } from './defaults/defaultPosts.js'

let user = reactive(null)

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/usermounted', { withCredentials: true })
    user = response.data // Set user data
    console.log(user)
  } catch (error) {
    console.error('Error fetching user:', error)
  }
})
</script>

<template>
  <NavigationBar v-bind:user="user" />
  <div class="flex flex-row h-[90%] w-full bg-[#F3F3F5]">
    <div class="bg-white flex w-1/5 border-r"></div>
    <div class="flex flex-col h-full w-4/5 items-center overflow-auto">
      <QuestionPost v-for="(post, index) in defaultPosts" :key="index" :post="post" />
    </div>
  </div>
</template>

<style scoped></style>
