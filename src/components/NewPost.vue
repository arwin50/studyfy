<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const subjects = ['Mathematics', 'Science', 'Humanities', 'History', 'Language']
const questionBody = reactive({ body: '', subject: 'Mathematics' })
const router = useRouter()
const postQuestion = async () => {
  try {
    const postData = {
      authorId: userStore.user._id,
      body: questionBody.body,
      comments: [],
      subject: questionBody.subject
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
      v-model="questionBody.body"
    >
    </textarea>
    <div class="flex mt-2 items-center gap-2 ml-1">
      <span>Subject</span>
      <select v-model="questionBody.subject" class="w-[25%] border p-1 rounded">
        <option v-for="(subject, index) in subjects" :key="index" :value="subject">
          {{ subject }}
        </option>
      </select>
      <button class="ml-auto mr-1 hover:opacity-50" @click="postQuestion">Post Question</button>
    </div>
  </div>
</template>

<style scoped></style>
