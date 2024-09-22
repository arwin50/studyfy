import { defineStore } from 'pinia'
import axios from 'axios'
export const useUserStore = defineStore('user', {
  state: () => ({
    user: {}
  }),
  actions: {
    setUser(newUser) {
      this.user = newUser
    },
    clearUser() {
      this.user = {}
    },
    async fetchUser() {
      try {
          const response = await axios.get('http://localhost:5000/usermounted', {
            withCredentials: true
          })
        this.setUser(response.data)
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }
  }
})
