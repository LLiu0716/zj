<script lang="ts">
export default {
  name: 'HambugerCom'
}
</script>

<script lang="ts" setup>
const props = defineProps({ isActive: { type: Boolean, default: false } })
const emit = defineEmits(['toggleClick'])
const toggleClick = () => {
  emit('toggleClick')
}
</script>

<template>
  <div class="hamburger-container" style="padding: 0 15px" @click="toggleClick">
    <svg-icon
      icon-class="list"
      class-name="hamburger"
      :class="{ 'is-active': props.isActive }"
    ></svg-icon>
  </div>
</template>

<style lang="scss" scoped>
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }

  :deep(.hamburger) {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    transition: all 0.2s;
  }

  :deep(.hamburger.is-active) {
    transform: rotate(180deg);
  }
}
</style>
