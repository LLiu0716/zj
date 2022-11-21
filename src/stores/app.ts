import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore(
  'app',
  () => {
    // 状态
    const state = reactive({
      siderbar: {
        // sidebar 展开状态
        opened: true
      }
    })

    const sidebar = computed(() => state.siderbar)

    // actions
    const toggleSidebar = () => {
      state.siderbar.opened = !state.siderbar.opened
    }
    return { state, sidebar, toggleSidebar }
  },
  {
    persist: {
      storage: window.sessionStorage,
      paths: ['state.siderbar.opened']
    }
  }
)
