<script setup>
import QuestionPost from '../components/QuestionPost.vue'
import { onMounted } from 'vue'
import { usePostStore } from '@/stores/postStore'

const postStore = usePostStore()

onMounted(() => {
  postStore.fetchPosts()
})
</script>

<template>
  <div class="flex flex-row h-full w-full">
    <div class="bg-white flex min-h-[100%] w-1/5 border-r">
    </div>
    <div class="flex flex-col h-full w-4/5 items-center overflow-auto">
      <QuestionPost v-for="post in postStore.posts" :key="post._id" :post="post" />
    </div>
  </div>
</template>

<style></style>
