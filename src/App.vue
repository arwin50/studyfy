<script setup>
import { reactive } from 'vue';
import QuestionPost from './components/QuestionPost.vue';

const defaultPosts = reactive([
  {
    name: "Arwin Delasan",
    postDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Louise Fermin Deiparine",
    postDetails: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident..."
  },
  {
    name: "Emily Smith",
    postDetails: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    name: "Arwin Delasan",
    postDetails: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
  }
]);
</script>

<template>
  <div class="flex flex-row items-center justify-center h-screen w-screen bg-[#F3F3F5]">
    <div class="bg-white h-full w-1/4"></div>
    <div class="h-full w-3/4 items-center overflow-auto">
      <QuestionPost v-for="(post, index) in defaultPosts" :key="index" :post="post"/>
    </div>
  </div>
</template>

<style scoped></style>
