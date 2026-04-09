<template>
  <div class="dashboard-view">
    <h1 class="mb-4">Tableau de bord</h1>

    <!-- Summary Cards -->
    <div class="row mb-5">
      <div class="col-md-4 mb-3">
        <SummaryCard label="Solde" :value="budgetStore.balance" type="balance" />
      </div>
      <div class="col-md-4 mb-3">
        <SummaryCard label="Revenus" :value="budgetStore.totalIncome" type="income" />
      </div>
      <div class="col-md-4 mb-3">
        <SummaryCard label="Dépenses" :value="budgetStore.totalExpense" type="expense" />
      </div>
    </div>

    <!-- Recent Transactions -->
    <div class="row">
      <div class="col-12">
        <TransactionList
          :transactions="budgetStore.recentTransactions"
          :filter="'all'"
          @delete="budgetStore.deleteTransaction"
        />
      </div>
    </div>

    <!-- Call to Action -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="alert alert-info d-flex justify-content-between align-items-center">
          <div>
            <strong>Conseil :</strong> Gérez vos transactions pour suivre votre budget en
            temps réel.
          </div>
          <router-link to="/transactions" class="btn btn-sm btn-info">
            Aller aux transactions
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useBudgetStore } from "@/stores/budgetStore";
import SummaryCard from "@/components/budget/SummaryCard.vue";
import TransactionList from "@/components/budget/TransactionList.vue";

const budgetStore = useBudgetStore();

// Charger les transactions au montage du composant ( Apres le le chargement du DOM )
onMounted(() => {
  budgetStore.loadTransactions();
});
</script>

<style scoped>
.dashboard-view {
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

.alert {
  border-radius: 8px;
  border: none;
}
</style>
