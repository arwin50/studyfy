<template>
  <div
    v-if="currentPost && currentPost._id && currentPost.body"
    class="flex flex-col w-2/3 mx-10 my-5 bg-white rounded-lg drop-shadow-md"
  >
    <div class="flex flex-row w-full p-7">
      <div class="size-14 rounded-full bg-black">
        <img :src="currentPost.author.image" alt="pfp-test" class="size-14 rounded-full" />
      </div>
      <div class="flex p-3 w-full items-center">
        <span class="text-black text-base font-semibold">{{ currentPost.author.displayName }}</span>
      </div>
    </div>
    <div class="flex flex-row w-full px-7">
      <span class="text-black text-xl">
        {{ currentPost.body }}
      </span>
    </div>
    <AnswerInputBox />
    <div class="flex flex-col items-center justify-center p-7 border-2 border-t-gray-300">
      <div
        v-if="currentPost.comments.length === 0"
        class="flex items-center h-[30vh] text-gray-400 text-xl font-semibold mb-7"
      >
        <p>No answers yet!</p>
      </div>

      <div
        v-else
        class="flex flex-row items-start justify-between w-full px-7"
        v-for="(answer, index) in currentPost.comments"
        :key="index"
        :answer="answer"
      >
        <div class="size-10 rounded-full bg-black">
          <img :src="answer.author.image" alt="pfp-test" class="size-10 rounded-full" />
        </div>
        <div class="flex flex-col min-h-[10vh] w-[90%] text-black bg-gray-200 rounded-xl p-4 mb-7">
          <span class="w-full font-bold pb-2"> {{ answer.author.displayName }} </span>
          {{ answer.body }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center w-2/3 mx-10 my-5 bg-white rounded-lg drop-shadow-md">
    Loading ...
  </div>
</template>

<script setup>
import axios from 'axios'
import AnswerInputBox from '../components/AnswerInputBox.vue'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

let currentPost = reactive({})
let route = useRoute()
let questionId = route.params.questionId

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:5000/question/${questionId}`, {
      withCredentials: true
    })
    Object.assign(currentPost, response.data)
    console.log(currentPost)
  } catch (error) {
    console.error(error)
  }
})
</script>
