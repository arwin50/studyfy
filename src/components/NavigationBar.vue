<script setup>
import { defineProps, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  user: Object
})

const loginWithGoogle = () => {
  window.open('http://localhost:5000/auth/google/callback', '_self')
}

const logout = () => {
  window.open('http://localhost:5000/logout', '_self')
}
</script>

<template>
  <nav class="flex w-full h-14 items-center bg-white border-b">
    <ul class="flex flex-grow mr-8">
      <li class="text-black text-2xl font-semibold ml-10 flex gap-2">
        <img src="https://cdn-icons-png.freepik.com/256/3145/3145765.png" class="h-8" />Studyfy
      </li>
      <li v-if="props.user && props.user.image" class="ml-auto flex flex-end mr-4">
        <button class="text-black text-base" @click="logout">Logout</button>
      </li>
      <li v-if="props.user && props.user.image" class="flex flex-end">
        <div class="h-8 rounded-full overflow-hidden">
          <img :src="props.user.image" class="h-full w-full" />
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
