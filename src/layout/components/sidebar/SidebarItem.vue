<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import path from 'path-browserify'

import SidebarItemLink from './SidebarItemLink.vue'
import { isExternal } from '@/utils/validate'

const props = withDefaults(
  defineProps<{
    item: RouteRecordRaw
    basePath: string
  }>(),
  {}
)

const { item } = toRefs(props)

const showingChildNumber = computed(() => {
  const children = (props.item.children || []).filter((child) => {
    if (child.meta && child.meta.hidden) return false
    return true
  })
  return children.length
})

const theOnlyOneChildRoute = computed<(RouteRecordRaw & { noShowingChildren?: boolean }) | null>(
  () => {
    if (showingChildNumber.value > 1) {
      return null
    }

    if (item.value.children) {
      for (const child of item.value.children) {
        if (!child.meta || !child.meta.hidden) {
          return child
        }
      }
    }

    return {
      ...props.item,
      noShowingChildren: true,
      path: ''
    }
  }
)

const icon = computed(() => {
  return theOnlyOneChildRoute.value?.meta?.icon || (props.item.meta && props.item.meta.icon)
})

const resolvePath = (childPath: string) => {
  if (isExternal(childPath)) return childPath
  return path.resolve(props.basePath, childPath)
}

const alwaysShowRootMenu = computed(() => props.item.meta && props.item.meta.alwaysShow)
</script>

<template>
  <template v-if="!item.meta || !item.meta.hidden">
    <template v-if="!alwaysShowRootMenu && theOnlyOneChildRoute">
      <SidebarItemLink
        :to="resolvePath(theOnlyOneChildRoute.path)"
        v-if="
          theOnlyOneChildRoute.meta &&
          (!theOnlyOneChildRoute.children || theOnlyOneChildRoute.noShowingChildren)
        "
      >
        <el-menu-item
          :index="resolvePath(theOnlyOneChildRoute.path)"
          v-if="theOnlyOneChildRoute.meta"
        >
          <el-icon v-if="icon">
            <svg-icon class="menu-icon" :icon-class="icon" />
          </el-icon>
          <template #title>
            <span>{{ theOnlyOneChildRoute.meta?.title }}</span>
          </template>
        </el-menu-item>
      </SidebarItemLink>
    </template>
    <!-- 多个子路由时 -->
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <el-icon v-if="item.meta?.icon">
          <svg-icon class="menu-icon" :icon-class="item.meta.icon" />
        </el-icon>
        <span class="submenu-title">{{ item.meta?.title }}</span>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      >
      </SidebarItem>
    </el-sub-menu>
  </template>
</template>
