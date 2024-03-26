<script setup>
import QuestionPost from '../components/QuestionPost.vue'
import { onMounted, reactive } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { usePostStore } from '@/stores/postStore'

const userStore = useUserStore()
</script>

<template>
  <div class="flex flex-col min-h-full w-4/5 items-center">
    <QuestionPost v-for="post in userStore.user.posts" :key="post._id" :post="post" />
  </div>
</template>

<style></style>
