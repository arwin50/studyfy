<script setup>
import { onMounted } from 'vue'
import QuestionPost from '../components/QuestionPost.vue'
import { usePostStore } from '@/stores/postStore'

const postStore = usePostStore()
onMounted(() => {
  postStore.fetchPosts()
})
</script>

<template>
  <div class="flex flex-col min-h-full w-4/5 items-center">
    <QuestionPost v-for="post in postStore.posts" :key="post._id" :post="post" />
  </div>
</template>

<style></style>
