<script setup>
import QuestionPage from '@/components/QuestionPage.vue'
import SignInBurst from '@/components/SignInBurst.vue'
</script>

<template>
  <div class="relative flex flex-row w-full bg-[#F3F3F5]">
    <div class="flex sticky top-0 items-center justify-center bg-white h-[100vh] w-1/4 border-r">
      <!-- <SignInBurst /> -->
    </div>
    <div class="flex flex-col h-full w-3/4 items-center overflow-auto">
      <!--     <QuestionPage :postId="parseInt($route.params.questionId)" /> -->
    </div>
  </div>
</template>
