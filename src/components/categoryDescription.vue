<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
let category = ref(route.params.category)

watch(
  () => route.params.category,
  (newValue) => {
    category.value = newValue
  }
)
</script>

<template>
  <div class="w-full bg-white py-8 px-10 border-b">
    <span class="text-4xl font-semibold">{{ category }}/questions</span>
  </div>
</template>
