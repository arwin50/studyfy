<template>
  <div class="flex fixed top-15 bg-white h-[92vh] w-[18%] border-r overflow-y-scroll scrollbar">
    <div class="flex flex-col w-[95%]">
      <div class="flex flex-col ml-6 mt-6 space-y-2">
        <router-link to="/">
          <div
            v-for="(link, index) in firstlinks"
            :key="index"
            class="flex flex-row items-center h-[40px] py-6 px-3 gap-3 rounded-lg hover:text-slate-700 hover:bg-slate-100"
          >
            <v-icon :name="link.icon" scale="1.4" />
            <p class="text-base mt-1">{{ link.name }}</p>
          </div>
        </router-link>
      </div>
      <div class="w-[92%] ml-5 mt-4">
        <hr />
      </div>

      <div class="flex flex-col ml-6 space-y-2">
        <button
          @click="showTopicsList"
          class="flex flex-row items-center py-0 gap-3 mt-4 h-[40px] rounded-lg hover:text-slate-700 hover:bg-slate-100"
        >
          <p class="text-base ml-3">SUBJECTS</p>
          <v-icon
            name="md-keyboardarrowdown-round"
            class="transition ml-auto mr-3"
            :class="{ 'rotate-180': showTopics }"
            scale="1.4"
          />
        </button>

        <div v-if="showTopics" class="" :class="{ 'open-height': showTopics }">
          <router-link to="/" v-for="(topic, index) in topics" :key="index">
            <div
              class="flex flex-row items-center gap-3 h-[40px] py-6 px-3 rounded-lg hover:text-slate-700 hover:bg-slate-100"
            >
              <v-icon :name="topic.icon" scale="1.4" />
              <p class="text-base">{{ topic.name }}</p>
            </div>
          </router-link>
        </div>
      </div>

      <div class="w-[92%] ml-5 mt-4">
        <hr />
      </div>

      <div class="flex flex-col ml-6 mt-6 space-y-2">
        <router-link to="/">
          <div
            v-for="(link, index) in resourcelinks"
            :key="index"
            class="flex flex-row items-center h-[40px] py-6 px-3 gap-3 rounded-lg hover:text-slate-700 hover:bg-slate-100"
          >
            <v-icon :name="link.icon" scale="1.4" />
            <p class="text-base mt-1">{{ link.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

let firstlinks = reactive([
  {
    name: 'Home',
    icon: 'hi-home'
  },
  {
    name: 'Popular',
    icon: 'bi-box-arrow-in-up-right'
  }
])

watch(
  () => userStore.user,
  (newUser, oldUser) => {
    if (newUser && newUser._id) {
      firstlinks.push({
        name: 'Your Questions',
        icon: 'ri-questionnaire-line'
      })
    }
  }
)

let topics = reactive([
  { name: 'Mathematics', icon: 'md-numbers-round' },
  { name: 'Science', icon: 'gi-materials-science' },
  { name: 'Humanities', icon: 'gi-human-pyramid' },
  { name: 'History', icon: 'bi-book' },
  { name: 'Language', icon: 'io-language' }
])

let resourcelinks = reactive([
  {
    name: 'E-Books',
    icon: 'hi-bookmark'
  },
  {
    name: 'Schools',
    icon: 'md-school-outlined'
  },
  {
    name: 'About Studyfy',
    icon: 'bi-question-circle'
  }
])

let showTopics = ref(false)

const showTopicsList = () => {
  showTopics.value = !showTopics.value
}
</script>

<style>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
