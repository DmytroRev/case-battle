<script setup lang="ts">
// import OperationList from './components/operation-rubric/OperationList.vue';

</script>

<template>
  <div class="app-wrapper">
    <!-- <OperationList /> -->
    <router-view />
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
