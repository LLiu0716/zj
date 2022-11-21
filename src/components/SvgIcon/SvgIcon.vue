<script setup lang="ts">
import { computed } from 'vue'
import { isExternal } from '@/utils/validate'

const props = defineProps<{ iconClass: string; className?: string }>()

const isExt = computed(() => isExternal(props.iconClass || ''))

const iconName = computed(() => `#icon-${props.iconClass}`)

const svgClass = computed(() => (props.className ? `svg-icon ${props.className}` : 'svg-icon'))

const styleExternalIcon = computed(() => ({
  mask: `url(${props.iconClass}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
}))
</script>

<template>
  <div v-if="isExt" class="svg-icon svg-external-icon" :style="styleExternalIcon" v-bind="$attrs" />
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
