<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>
