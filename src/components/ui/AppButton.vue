<template>
  <button
    :class="['btn', `btn-${variant}`, { 'btn-sm': size === 'sm', 'btn-lg': size === 'lg' }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
  }
)

defineEmits<{
  click: []
}>()
</script>

<style scoped>
button {
  font-weight: 500;
  transition: all 0.3s ease;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
