<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import { onMounted } from 'vue'
import NavigationBar from './components/NavigationBar.vue';

let user = reactive({})

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/usermounted', { withCredentials: true })
    Object.assign(user, response.data)
  } catch (error) {
    console.error('Error fetching user:', error)
  }
})

</script>

<template>
  <NavigationBar v-bind:user="user" />
  <router-view/>
</template>

<style scoped></style>
