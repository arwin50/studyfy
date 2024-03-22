<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import axios from 'axios'
import NavigationBar from './components/NavigationBar.vue'

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
  <div class="h-full">
    <NavigationBar class="h-[8%]" />
    <main class="h-[92%] bg-[#F3F3F5]">
      <RouterView />
    </main>
  </div>
</template>

<style></style>
