<template>
    <div v-if="props.currentComment.author._id == userStore.user._id" class="flex flex-row">
          <button
            class="flex items-center hover:bg-gray-300 rounded-sm px-2 mx-2 cursor-pointer"
            @click="$emit('toggleEditTools')"
          >
            <v-icon name="md-delete-outlined" />Cancel
          </button>
          <button
            class="flex items-center hover:bg-gray-300 rounded-sm px-2 mx- 2"
            @click="editComment"
          >
              <v-icon name="md-edit-outlined" />Edit
          </button>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import axios from 'axios'

const userStore = useUserStore()
const props = defineProps({
    currentComment: Object,
    newCommentBody: String
})
defineEmits(['toggleEditTools'])

const editComment = async () => {
    try {
        const response = await axios.put(`http://localhost:5000/comment/${props.currentComment._id}`, {
        body: props.newCommentBody,
        authorId: userStore.user._id
        })
        console.log(response.data)
        window.location.reload()
    } catch (error) {
        console.error('Error updating post:', error)
    }
}
</script>