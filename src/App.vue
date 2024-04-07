<script setup>
import { RouterView, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import NavigationBar from './components/NavigationBar.vue'
import SideBar from '@/components/SideBar.vue'

const userStore = useUserStore()
const route = useRoute()

onMounted(() => {
  userStore.fetchUser()
})
</script>

<template>
  <div class="h-full overflow-x-hidden scrollbar">
    <NavigationBar class="" />
    <main class="relative flex flex-row w-full">
      <template v-if="route.name != 'login'">
        <SideBar />
      </template>
      <RouterView :class="{ 'ml-[18%]': route.name != 'login' }" class="h-full" />
    </main>
  </div>
</template>

<style>
body {
  background-color: #f3f3f5;
}
</style>
