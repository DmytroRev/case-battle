<script setup lang="ts">
import Header from './components/header/Header.vue';
</script>

<template>
  <div>
    <Header />
    <div class="app-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  overflow: hidden;
}
</style>
