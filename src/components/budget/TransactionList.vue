<template>
  <AppCard title="Transactions">
    <div v-if="filteredTransactions.length == 0" class="text-center py-4 text-muted">
      <p>Aucune transaction trouvée.</p>
    </div>
    <div v-else class="transactions-list">
      <TransactionItem
        v-for="transaction in filteredTransactions"
        :key="transaction.id"
        :transaction="transaction"
        @delete="$emit('delete', transaction.id)"
      />
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppCard from '@/components/ui/AppCard.vue'
import TransactionItem from '@/components/budget/TransactionItem.vue'
import type { Transaction } from '@/stores/budgetStore'

interface Props {
  transactions: Transaction[]
  filter: 'all' | 'income' | 'expense'
}

const props = defineProps<Props>()

defineEmits<{
  delete: [id: string]
}>()

const filteredTransactions = computed(() => {
  if (props.filter == 'all') {
    return props.transactions
  }
  return props.transactions.filter(t => t.type == props.filter)
})
</script>

<style scoped>
.transactions-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
