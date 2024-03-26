<template>
    <div class="flex flex-col items-center w-full">
        <section class="flex flex-row p-9 w-full gap-1 bg-stone-200">
            <ul class="flex flex-grow mr-4 items-end">
                <li class="ml-4">
                    <div class="size-40 rounded-full relative shadow-xl">
                        <img :src="currentUser.image" alt="pfp-test" class="absolute size-40 rounded-full inset-0">
                    </div>
                </li>
                <li class="ml-4 text-4xl font-bold">
                        {{ currentUser.displayName }}
                </li>
            </ul>
        </section>
        <section class="flex flex-col items-center m-9 p-9 w-[93%] gap-1 bg-white ">
            <span class="ml-4 text-2xl font-bold flex">
                    Posts
            </span>

            <div
                v-if="currentUser && currentUser.posts && currentUser.posts.length === 0"
                class="flex items-center h-[30vh] text-gray-400 text-xl font-semibold mb-7"
            >
                <p>No posts yet!</p>
            </div>
            
            <QuestionPost v-else v-for="post in currentUser.posts" :key="post._id" :post="post" />
        </section>
    </div>
</template>

<script setup>
import { onMounted, reactive, } from 'vue'
import { useRoute } from "vue-router";
import axios from 'axios';
import QuestionPost from '../components/QuestionPost.vue'

let currentUser = reactive({})
const route = useRoute()
const userId = route.params.userId

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:5000/user/${userId}`, {
      withCredentials: true
    })
    Object.assign(currentUser, response.data)
    console.log(currentUser)
  } catch (error) {
    console.error(error)
  }
})

</script>
