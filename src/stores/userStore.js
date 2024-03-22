import { defineStore } from 'pinia'

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
    }
  }
})
