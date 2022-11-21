<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'
import scssVariables from '@/styles/variables.module.scss'
import SidebarItem from './SidebarItem.vue'

import { routes } from '@/router/routes'

const store = useAppStore()

const { sidebar } = storeToRefs(store)

const menuRoutes = computed(() => routes)

const route = useRoute()

const activeMenu = computed(() => {
  const { path, meta } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<template>
  <el-menu
    class="sidebar-container-menu"
    mode="vertical"
    :default-active="activeMenu"
    :background-color="scssVariables.menuBg"
    :text-color="scssVariables.menuText"
    :active-text-color="scssVariables.menuActiveText"
    :collapse="sidebar.opened"
    :collapse-transition="true"
  >
    <SidebarItem
      v-for="route in menuRoutes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>
