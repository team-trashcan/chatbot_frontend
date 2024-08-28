import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '../api/api'

interface State {
  messages: any[]
}

export const useMessagesStore = defineStore({
  id: 'messages',

  state: (): State => ({
    messages: []
  }),

  getters: {},
  actions: {
    async test(smth: any) {
      console.log((await api.test()).data)
    }
  }
})
