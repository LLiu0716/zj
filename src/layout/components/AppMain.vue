<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="app-main">
    <RouterView v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <KeepAlive>
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </transition>
    </RouterView>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
}

.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
