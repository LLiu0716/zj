<script lang="ts" setup>
import screenfull from 'screenfull'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'

const isFullscreen = ref(false)

const handleClick = () => {
  if (screenfull.isEnabled) {
    // 浏览器是否允许全屏模式
    screenfull.toggle()
    return
  }
  return ElMessage({
    message: 'you browser can not work',
    type: 'warning'
  })
}

const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}

onMounted(() => {
  if (screenfull.isEnabled) {
    screenfull.on('change', change)
  }
})
</script>

<template>
  <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" @click="handleClick" />
</template>
