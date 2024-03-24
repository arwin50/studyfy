<template>
    <div class="flex items-center justify-center p-7">
      <div class="flex flex-row w-full items-center justify-evenly bg-gray-300 rounded-lg py-4">
        <div class="size-10 rounded-full bg-black">
          <img :src="userStore.user.image" alt="pfp-test" class="size-10 rounded-full" />
        </div>
        <textarea
          className="w-4/5 h-10 p-2 pe-10 bg-transparent rounded placeholder:bold placeholder-[#737373] outline-none text-black overflow-y-hidden break-words"
          placeholder="Write your answer..."
          v-model="answerBody"
        />
        <button @click="postComment">
          <img src="../images/submit.png" alt="pfp-test" class="size-6" />
        </button>
      </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/userStore'

const route = useRoute()
const userStore = useUserStore()
const answerBody = ref('')

const postComment = async () => {
  let questionId = route.params.questionId

  try {
    const commentData = {
      postId: questionId,
      author: userStore.user._id,
      body: answerBody.value,
    }

    console.log('data posted', commentData)
    await axios.post('http://localhost:5000/comments', commentData);
    window.location.reload()

  } catch (error) {
    console.error('Error heree:', error)
  }
}
</script>
