<script setup>
import axios from 'axios'
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const userStore = useUserStore()
let currentPost = reactive({})
let questionBody = ref('')
let questionId = route.params.questionId
let category = route.params.category
const router = useRouter()

const editPost = async () => {
  try {
    const response = await axios.put(`http://localhost:5000/${category}/question/${questionId}`, {
      body: questionBody.value,
      authorId: userStore.user._id
    })
    console.log(response.data)
    router.push(`/${category}/question/${questionId}`)
  } catch (error) {
    console.error('Error updating post:', error)
  }
}

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:5000/${category}/question/${questionId}`, {
      withCredentials: true
    })
    Object.assign(currentPost, response.data)
    questionBody.value = currentPost.body
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="flex flex-col w-1/2 mx-10 h-80 my-10 bg-white rounded-lg drop-shadow-md p-2">
    <textarea class="w-full h-[90%] rounded-lg border-2 p-2" v-model="questionBody"></textarea>
    <button class="ml-auto mr-1 hover:opacity-50" @click="editPost">Edit Question</button>
  </div>
</template>

<style scoped></style>
