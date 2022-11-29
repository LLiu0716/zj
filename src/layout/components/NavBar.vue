<script lang="ts" setup>
// import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'
import Hambuger from './Hambuger/index.vue'
import BreadCrumb from './BreadCrumb.vue'
import ScreenFull from './ScreenFull.vue'
import SizeSelect from './SizeSelect.vue'
import Avatar from './Avatar.vue'

const store = useAppStore()

// const { sidebar } = storeToRefs(store)

const toggleSidebar = () => {
  store.toggleSidebar()
}
</script>

<template>
  <nav class="nav-bar">
    <Hambuger @toggleClick="toggleSidebar" :is-active="true" />
    <BreadCrumb />
    <div class="right-menu">
      <ScreenFull class="right-menu-item hover-effect" />
      <el-tooltip content="Global Size" effect="dark" placement="bottom">
        <SizeSelect class="right-menu-item hover-effect" />
      </el-tooltip>
      <Avatar />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  background: #fff;
  border-bottom: 1px solid rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;

    &-item {
      padding: 0 8px;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
  }
}
</style>
