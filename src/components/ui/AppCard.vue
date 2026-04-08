<template>
  <div class="card h-100">
    <div v-if="title" class="card-header bg-light">
      <h5 class="card-title mb-0">{{ title }}</h5>
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer bg-light">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.card-header {
  border-bottom: 1px solid #e0e0e0;
}

.card-title {
  font-weight: 600;
  color: #333;
}

.card-body {
  padding: 1.5rem;
}

.card-footer {
  border-top: 1px solid #e0e0e0;
}
</style>
