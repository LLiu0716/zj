<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useAppStore } from './stores/app'

import cn from 'element-plus/dist/locale/zh-cn.mjs'

const store = useAppStore()
const { size } = storeToRefs(store)
</script>

<template>
  <el-config-provider :size="size" :locale="cn">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
