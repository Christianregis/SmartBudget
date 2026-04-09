<template>
  <div class="transaction-item">
    <div class="transaction-info">
      <div class="transaction-details">
        <h6 class="transaction-title">{{ transaction.title }}</h6>
        <small class="transaction-date text-muted">{{ formatDate(transaction.date) }}</small>
      </div>
    </div>
    <div class="transaction-amount-section">
      <p class="transaction-amount" :class="amountClass">
        {{ operator }}{{ formatCurrency(transaction.amount) }}
      </p>
      <button
        class="btn btn-sm btn-outline-danger"
        @click="$emit('delete', transaction.id)"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatCurrency, formatDate } from '@/utils/formatCurrency'
import type { Transaction } from '@/stores/budgetStore'

const props = defineProps<{
  transaction: Transaction
}>()

defineEmits<{
  delete: [id: string]
}>()


const amountClass = computed(() => {
  return props.transaction.type === 'income' ? 'text-success' : 'text-danger'
})

const operator = computed(() => {
  return props.transaction.type === 'income' ? '+' : '-'
})
</script>

<style scoped>
.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;
  transition: all 0.2s ease;
}

.transaction-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.transaction-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.transaction-icon {
  font-size: 1.5rem;
  min-width: 2rem;
  text-align: center;
}

.transaction-details {
  flex: 1;
}

.transaction-title {
  margin: 0;
  font-weight: 600;
  color: #333;
}

.transaction-date {
  display: block;
  margin-top: 0.25rem;
}

.transaction-amount-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
}

.transaction-amount {
  margin: 0;
  font-weight: 700;
  font-size: 1.1rem;
  min-width: 100px;
  text-align: right;
}

.text-success {
  color: #198754;
}

.text-danger {
  color: #dc3545;
}

.btn-outline-danger {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

@media (max-width: 576px) {
  .transaction-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .transaction-amount-section {
    width: 100%;
    margin-left: 0;
    margin-top: 0.75rem;
    justify-content: space-between;
  }

  .transaction-amount {
    text-align: left;
  }
}
</style>
