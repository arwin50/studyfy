<template>
    <div v-if="props.currentComment.author._id == userStore.user._id" class="flex flex-col relative">
        <v-icon name="bi-three-dots" scale="1.3" @click="toggleCommentMenu" class="cursor-pointer" />
        <div
          v-if="showCommentMenu"
          class="flex flex-col absolute top-4 right-1 bg-white rounded shadow p-2 gap-1"
        >
          <button
            class="flex items-center gap-1 hover:bg-gray-200 rounded-sm p-2 cursor-pointer"
            @click="deleteComment"
          >
            <v-icon name="md-delete-outlined" />Delete
          </button>
          <button
            class="flex items-center gap-1 hover:bg-gray-200 rounded-sm p-2"
            @click="editComment"
          >
              <v-icon name="md-edit-outlined" />Edit
          </button>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { defineProps, ref, defineEmits } from 'vue';
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const props = defineProps({
    currentComment: Object,
})

let showCommentMenu = ref(false)
const emit = defineEmits(['toggleEditTools']);

const toggleCommentMenu = () => {
  showCommentMenu.value = !showCommentMenu.value
}

const deleteComment = async () => {
  try {
    const response = await axios.delete(`http://localhost:5000/comment/${props.currentComment._id}`)
    console.log(response.data)
    window.location.reload()
  } catch (error) {
    console.error('Error deleting post:', error)
  }
}

const editComment = async () => {
    showCommentMenu.value = false
    emit('toggleEditTools')
}

</script>
