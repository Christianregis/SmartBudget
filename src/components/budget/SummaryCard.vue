<template>
  <AppCard>
    <div class="summary-card">
      <div class="summary-content">
        <h6 class="summary-label">{{ label }}</h6>
        <p class="summary-value">
          {{ formatCurrency(value) }}
        </p>
      </div>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from "@/components/ui/AppCard.vue";
import { formatCurrency } from "@/utils/formatCurrency";

interface Props {
  label: string;
  value: number;
}

// Il s'agit d'un moyen d'ecriture evitant d'utiliser withDefaults, ( elle s'appelle la destrucuration ) NB: On peut aussi donner des valeurs par defaut par defaut a nos element en faisant nomeElement = valeurParDefaut
const {
  label='', value
} = defineProps<Props>()

console.log('label : ',label)
console.log('value : ',value)


</script>

<style scoped>
.summary-card {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.summary-icon {
  font-size: 2rem;
}

.summary-content {
  flex: 1;
}

.summary-label {
  margin-bottom: 0.25rem;
  color: #666;
  font-weight: 500;
  font-size: 0.9rem;
}

.summary-value {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.text-primary {
  color: #0d6efd;
}

.text-success {
  color: #198754;
}

.text-danger {
  color: #dc3545;
}
</style>
