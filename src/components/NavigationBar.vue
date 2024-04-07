<template>
  <nav class="sticky top-0 w-full flex items-center justify-between bg-white border-b h-[8%] z-50">
    <ul class="flex flex-grow mr-4 items-center">
      <li class="ml-4">
        <router-link to="/" class="text-black text-2xl font-semibold flex gap-2">
          <img src="https://cdn-icons-png.freepik.com/256/3145/3145765.png" class="h-8" />Studyfy
        </router-link>
      </li>
      <li v-if="userStore.user && userStore.user.image" class="ml-auto mr-4">
        <router-link
          to="/newPost"
          class="text-black text-base flex items-center rounded-lg py-2 pr-3 pl-2 border border-black"
        >
          <img src="../images/plus.svg" class="h-6" /> Create Post
        </router-link>
      </li>
      <li v-if="userStore.user && userStore.user.image" class="mr-4">
        <button class="text-black text-base" @click="logout">Logout</button>
      </li>
      <li v-if="userStore.user && userStore.user.image" class="flex" @click="togglePictureMenu">
        <div class="h-8 rounded-full overflow-hidden">
          <img :src="userStore.user.image" class="h-full w-full" />
        </div>
        <div v-if="isPictureClicked" class="absolute right-4 top-12 pt-0.5 w-[12%]"></div>
      </li>
      <li v-else class="ml-auto" @click="togglePictureMenu">
        <div class="border rounded-full border-[#2f3e46] cursor-pointer">
          <v-icon name="bi-person-fill" scale="1.8" fill="#2f3e46" />
        </div>
        <div v-if="isPictureClicked" class="absolute right-4 top-12 pt-0.5 w-[12%]">
          <div class="flex flex-col bg-white border rounded-sm">
            <ul>
              <li>
                <router-link to="/login"
                  ><p class="hover:bg-gray-100 w-full p-2">Log In / Sign Up</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'

let isPictureClicked = ref(false)
const userStore = useUserStore()

const togglePictureMenu = () => {
  isPictureClicked.value = !isPictureClicked.value
}

const logout = () => {
  window.open('http://localhost:5000/logout', '_self')
}
</script>
