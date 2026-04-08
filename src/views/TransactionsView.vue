<template>
  <div class="transactions-view">
    <h1 class="mb-4">💳 Gestion des transactions</h1>

    <div class="row">
      <!-- Form Column -->
      <div class="col-lg-4 mb-4">
        <TransactionForm @submit="handleAddTransaction" />
      </div>

      <!-- Transactions Column -->
      <div class="col-lg-8">
        <div class="mb-4">
          <FilterBar @filter="handleFilter" />
        </div>

        <TransactionList
          :transactions="budgetStore.transactions"
          :filter="currentFilter"
          @delete="budgetStore.deleteTransaction"
        />

        <!-- Statistics -->
        <div class="row mt-4">
          <div class="col-md-6 mb-3">
            <div class="stat-card bg-success bg-opacity-10 p-3 rounded">
              <small class="text-muted">Total des revenus</small>
              <p class="text-success fw-bold fs-5 mb-0">
                {{ formatCurrency(budgetStore.totalIncome) }}
              </p>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="stat-card bg-danger bg-opacity-10 p-3 rounded">
              <small class="text-muted">Total des dépenses</small>
              <p class="text-danger fw-bold fs-5 mb-0">
                {{ formatCurrency(budgetStore.totalExpense) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useBudgetStore } from "@/stores/budgetStore";
import { formatCurrency } from "@/utils/formatCurrency";
import TransactionForm from "@/components/budget/TransactionForm.vue";
import FilterBar from "@/components/budget/FilterBar.vue";
import TransactionList from "@/components/budget/TransactionList.vue";

const budgetStore = useBudgetStore();
const currentFilter = ref<"all" | "income" | "expense">("all");

onMounted(() => {
  budgetStore.loadTransactions();
});

const handleAddTransaction = (data: {
  title: string;
  amount: number;
  type: "income" | "expense";
}) => {
  budgetStore.addTransaction(data.title, data.amount, data.type);
};

const handleFilter = (filter: "all" | "income" | "expense") => {
  currentFilter.value = filter;
};
</script>

<style scoped>
.transactions-view {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
}

.stat-card {
  border-radius: 8px;
  transition: all 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.text-success {
  color: #198754;
}

.text-danger {
  color: #dc3545;
}

.text-muted {
  color: #6c757d;
}
</style>
