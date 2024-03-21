<script setup>
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  user: Object
})

const { user } = props

const loginWithGoogle = () => {
  window.open('http://localhost:5000/auth/google/callback', '_self')
}
</script>

<template>
  <nav class="flex w-full h-14 items-center bg-white border-b">
    <ul class="flex flex-grow mr-8">
      <li class="text-black text-2xl font-semibold ml-10 flex gap-2">
        <img src="https://cdn-icons-png.freepik.com/256/3145/3145765.png" class="h-8" />Studyfy
      </li>
      <li v-if="user && user.image" class="flex flex-end ml-auto">
        <div class="h-8 rounded-full overflow-hidden">
          <img :src="user.image" class="h-full w-full" />
        </div>
      </li>
      <li v-else class="flex flex-end ml-auto">
        <button class="text-black" @click="loginWithGoogle">
          <img src="../images/icons8-google.svg" class="h-8" />
        </button>
      </li>
    </ul>
  </nav>
</template>
