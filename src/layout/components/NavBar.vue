<script lang="ts" setup>
// import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'
import Hambuger from './Hambuger/index.vue'

const store = useAppStore()

// const { sidebar } = storeToRefs(store)

const toggleSidebar = () => {
  store.toggleSidebar()
}
</script>

<template>
  <nav class="navbar">
    <Hambuger @toggleClick="toggleSidebar" :is-active="true" />
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  height: 50px;
}
</style>
