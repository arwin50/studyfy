<script setup>
import ProfilePicture from './ProfilePicture.vue';
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const loginWithGoogle = () => {
  window.open('http://localhost:5000/auth/google/callback', '_self')
}

const logout = () => {
  window.open('http://localhost:5000/logout', '_self')
}
</script>

<template>
  <nav class="sticky top-0 w-full flex items-center justify-between bg-white border-b h-[8%] z-50">
    <ul class="flex flex-grow mr-4 items-center">
      <li class="ml-4">
        <router-link to="/" class="text-black text-2xl font-semibold flex gap-2">
          <img src="https://cdn-icons-png.freepik.com/256/3145/3145765.png" class="h-8" />Studyfy
        </router-link>
      </li>
      <li v-if="userStore.user && userStore.user.image" class="ml-auto flex flex-end mr-4">
        <router-link
          to="/newPost"
          class="text-black text-base flex items-center rounded-lg py-2 pr-3 pl-2 border border-black"
        >
          <img src="../images/plus.svg" class="h-6" /> Create Post
        </router-link>
      </li>
      <li v-if="userStore.user && userStore.user.image" class="flex flex-end mr-4">
        <button class="text-black text-base" @click="logout">Logout</button>
      </li>
      <li v-if="userStore.user && userStore.user.image" class="flex flex-end">
        <ProfilePicture :user="userStore.user"/>
      </li>
      <li v-else class="flex flex-end ml-auto">
        <button class="text-black" @click="loginWithGoogle">
          <img src="../images/icons8-google.svg" class="h-8" />
        </button>
      </li>
    </ul>
  </nav>
</template>
