<template>
  <div id="app">
    <AppHeader />
    <router-view class="content" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 82vh;
  align-items: flex-start;
}

.content {
  flex-grow: 1;
}

</style>
