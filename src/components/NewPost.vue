<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const questionBody = ref('')
const router = useRouter()
const postQuestion = async () => {
  try {
    const postData = {
      authorId: userStore.user._id,
      body: questionBody.value,
      comments: []
    }
    console.log('data posted', postData)
    await axios.post('http://localhost:5000/', postData)

    router.push('/')
  } catch (error) {
    console.error('Error posting question:', error)
  }
}
</script>

<template>
  <div class="flex flex-col w-1/2 mx-10 h-80 my-10 bg-white rounded-lg drop-shadow-md p-2">
    <textarea
      class="w-full h-[90%] rounded-lg border-2 p-2"
      placeholder="Ask a question..."
      v-model="questionBody"
    >
    </textarea>
    <button class="ml-auto mr-1 hover:opacity-50" @click="postQuestion">Post Question</button>
  </div>
</template>

<style scoped></style>
