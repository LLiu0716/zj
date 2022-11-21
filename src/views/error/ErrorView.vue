<script setup lang="ts">
// import { getCurrentInstance } from 'vue'
// const { proxy } = getCurrentInstance()!
import err from '@/icon/svg/404.svg'

// const click = () => {
//   // proxy?.$message.success('恭喜你，这是一条成功消息')
// }
</script>

<template>
  <div class="about">
    <h1>This is an 404 page</h1>
    <img :src="err" alt="404" />
    <svg-icon icon-class="bug" class-name="custom-class" />
    <svg-icon icon-class="zip" class-name="custom-class" />
  </div>
</template>

<style>
.custom-class {
  font-size: 200px;
  color: green;
}
</style>
