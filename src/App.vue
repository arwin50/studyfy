<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import axios from 'axios'
import NavigationBar from './components/NavigationBar.vue'
import SideBar from '@/components/SideBar.vue'

const userStore = useUserStore()

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/usermounted', { withCredentials: true })
    userStore.setUser(response.data)
  } catch (error) {
    console.error('Error fetching user:', error)
  }
})
</script>

<template>
  <div class="h-full overflow-x-hidden">
    <NavigationBar class="" />
    <main class="relative flex flex-row w-full">
      <SideBar />
      <RouterView class="ml-[18%]" />
    </main>
  </div>
</template>

<style>
body {
  background-color: #f3f3f5;
}
</style>
