<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import NavigationBar from './components/NavigationBar.vue'
import SideBar from '@/components/SideBar.vue'

const userStore = useUserStore()

onMounted(() => {
  userStore.fetchUser()
})
</script>

<template>
  <div class="h-full overflow-x-hidden scrollbar">
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
