<script setup>
  import QuestionPost from '../components/QuestionPost.vue'
  import SignInBurst from '../components/SignInBurst.vue'
  import { defaultPosts } from '../defaults/defaultPosts.js'
</script>

<template>
  <div class="relative flex flex-row h-full w-full bg-[#F3F3F5]">
    <div class="flex sticky top-0 items-center justify-center bg-white h-[100vh] w-1/4 border-r">
      <SignInBurst/>
    </div>
    <div class="flex flex-col w-3/4 items-center overflow-auto">
      <QuestionPost v-for="(post, index) in defaultPosts" :key="index" :post="post" />
    </div>
  </div>
</template>
