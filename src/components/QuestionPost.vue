<template>
  <div class="flex flex-col w-2/3 mx-10 my-5 bg-white rounded-lg drop-shadow-md">
    <router-link
      :to="{
        name: 'questionPage',
        params: { category: props.post.subject.subjectTitle, questionId: props.post._id }
      }"
      class="hover:bg-slate-100"
    >
      <div class="flex flex-row ml-6 mt-5 mb-4 w-[93%] gap-1">
        <div class="w-12 rounded-full bg-black overflow-hidden">
          <img :src="props.post.author.image" alt="pfp-test" class="h-full w-full" />
        </div>
        <div class="flex p-2 items-center w-[95%]">
          <span class="text-black text-lg font-semibold">{{ props.post.author.displayName }} </span>
          <span class="text-black font-semibold ml-auto text-xs rounded-full px-2 py-1 bg-green-200"
            >{{ props.post.subject.subjectTitle }}
          </span>
        </div>
      </div>
      <div class="flex flex-row w-full px-7 mb-10">
        <span class="text-black text-xl">
          {{ props.post.body }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  post: Object
})
</script>

<style scoped></style>
