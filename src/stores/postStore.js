// postStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: []
  }),
  actions: {
    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:5000/', { withCredentials: true })
        console.log(response.data)
        this.posts = response.data
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  }
})
