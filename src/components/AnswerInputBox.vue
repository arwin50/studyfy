<template>
  <div v-if="userStore.user._id" class="flex items-center justify-center p-7">
    <div
      class="flex flex-row w-full items-center justify-evenly bg-gray-100 border rounded-lg py-4"
    >
      <ProfilePicture :user="userStore.user"/>
      <textarea
        className="w-4/5 h-10 p-2 pe-10 bg-transparent rounded placeholder:bold placeholder-[#737373] outline-none text-black overflow-y-hidden break-words"
        placeholder="Write your answer..."
        v-model="answerBody"
        @input="autoGrow"
      />
      <button @click="postComment">
        <v-icon name="hi-arrow-circle-right" scale="1.7" />
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import ProfilePicture from './ProfilePicture.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const route = useRoute()
const userStore = useUserStore()
const answerBody = ref('')

const postComment = async () => {
  const questionId = route.params.questionId
  const category = route.params.category

  try {
    const commentData = {
      author: userStore.user._id,
      body: answerBody.value
    }

    console.log('data posted', commentData)
    await axios.post(
      `http://localhost:5000/${category}/question/${questionId}/comments`,
      commentData
    )
    window.location.reload()
  } catch (error) {
    console.error('Error heree:', error)
  }
}

const autoGrow = (event) => {
  const textarea = event.target
  textarea.style.height = "5px"
  textarea.style.height = (textarea.scrollHeight) + "px"
}
</script>

<style scoped>
  textarea {
  resize: none;
  }
</style>