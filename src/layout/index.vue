<script lang="ts">
export default {
  name: 'DefaultLayout'
}
</script>

<script lang="ts" setup>
import SideBar from './components/sidebar/Side-bar.vue'
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="page-app">
    <section class="page-section-sidebar">
      <SideBar />
    </section>
    <section class="page-section-main">
      <NavBar class="page-nav">nav</NavBar>
      <aside class="page-aside">aside</aside>
      <article class="page-article">
        <AppMain />
      </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.page {
  &-app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
  }

  &-section-sidebar {
    background-color: $menuBg;
  }

  &-section-main {
    flex: 1;
    background-color: aqua;
  }

  &-nav {
    height: 50px;
    background-color: #f00;
  }

  &-aside {
    height: 34px;
    background-color: #ff0;
  }

  &-article {
    height: calc(100vh - 84px);
    background-color: #f0f;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
