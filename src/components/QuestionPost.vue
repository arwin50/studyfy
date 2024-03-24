<template>
  <div class="flex flex-col w-2/3 mx-10 my-5 bg-white rounded-lg drop-shadow-md">
    <router-link
      :to="{ name: 'questionPage', params: { questionId: props.post._id } }"
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
      <div class="flex flex-row w-full px-7 mb-1">
        <span class="text-black text-xl">
          {{ props.post.body }}
        </span>
      </div>
    </router-link>
    <div class="flex flex-row justify-evenly items-center w-full h-[10vh]">
      <button
        v-if="userStore.user && userStore.user.image"
        class="flex flex-row justify-evenly items-center h-[6vh] w-[20vh] text-black text-base font-semibold rounded-lg hover:text-slate-700 hover:bg-slate-100"
      >
        <img src="../images/comment.png" alt="My Image" class="h-7 w-7" />
        Answer
      </button>
      <button
        @click="toggleAnswersList"
        class="flex flex-row justify-evenly items-center h-[6vh] w-[40vh] text-black text-base font-bold rounded-lg hover:text-slate-700 hover:bg-slate-100"
      >
        <span v-if="showAnswers"> Hide Existing Answers </span>
        <span v-if="!showAnswers"> Show Existing Answers </span>
      </button>
    </div>
    <div v-if="showAnswers" class="flex flex-col items-center justify-evenly w-full px-7 pt-7">
      <div
        v-if="props.post.comments.length === 0"
        class="flex items-center h-[30vh] text-gray-400 text-xl font-semibold mb-7"
      >
        <p>No answers yet!</p>
      </div>

      <div
        v-else
        class="flex flex-row items-start justify-between w-full px-7"
        v-for="(answer, index) in props.post.comments"
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
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const props = defineProps({
  post: Object
})

let showAnswers = ref(false)

const toggleAnswersList = () => {
  showAnswers.value = !showAnswers.value
}
</script>

<style scoped></style>
